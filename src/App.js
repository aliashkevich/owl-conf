import React from 'react';
import './App.css';
import Home from './components/Home';
import Speakers from './components/Speakers';
import Jobs from './components/Jobs';
import Schedule from './components/Schedule';
import Nav from './components/Header';
import Mapowl from './components/Map';
import ScrollableAnchor from 'react-scrollable-anchor';

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
  }

  render() {
    return (
      <div className='App'>
        {this.state.loading ? (
          <React.Fragment>Loading...</React.Fragment>
        ) : (
          <React.Fragment>
            <Nav id='section1' />
            <Home id='section2' />
            <Jobs id='section3' />
            <Speakers speakers={this.state.speakers} id='section4' />
            <Jobs id='section1' />
            <Schedule timetable={this.state.timetable} id='section5' />
            <Mapowl id='section6' />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
