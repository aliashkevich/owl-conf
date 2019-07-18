import React from 'react';
import './App.css';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Address from './components/Address';
import Schedule from './components/Schedule';
import Nav from './components/Header';
import {Button} from 'reactstrap';

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
    fetch('https://api.jsonbin.io/b/5d1cc16ff467d60d75acb5bd')
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
          <React.Fragment>Loading...</React.Fragment>
        ) : (
          <React.Fragment>
            <Nav />
            <Home />
            <Speakers speakers={this.state.speakers} />
            <Schedule timetable={this.state.timetable} />
            <Address />
            <Jobs jobs={this.state.jobs} />
            <Footer />
          </React.Fragment>
        )}
        <a onClick={this.scrollToTop}>
          <Button className='to-the-top'>To the top!</Button>
        </a>
      </div>
    );
  }
}

export default App;
