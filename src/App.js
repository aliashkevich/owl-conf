import React from 'react';
import './App.css';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Jobs from './components/Jobs';
import Address from './components/Address';
import Schedule from './components/Schedule';
import Nav from './components/Header';
import $ from 'jquery';

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: {},
      address: {},
      speakers: [],
      timetable: [],
      about: {},
      loading: true,
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5d2f4c5450ba093dda160d01/3')
      .then(res => res.json())
      .then(data => {
        this.setState({
          jobs: data.jobs,
          address: data.location,
          speakers: data.speakers,
          timetable: data.timetable,
          about: data.about,
          loading: false,
        });
      })
      .catch(error => console.log(error));

    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    var btn = $('#to-the-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, '300');
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className='App'>
        {this.state.loading ? (
          <div className='spinner'>
            <i className='fa fa-cog fa-spin fa-3x fa-fw' />
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          <React.Fragment>
            <Nav />
            <Home />
            <Speakers speakers={this.state.speakers} />
            <Schedule timetable={this.state.timetable} />
            <Address />
            <Jobs jobs={this.state.jobs} />
          </React.Fragment>
        )}
        <a onClick={this.scrollToTop} id='to-the-top'>
          <i className='fa fa-chevron-up fa-2x' aria-hidden='true' />
        </a>
      </div>
    );
  }
}

export default App;
