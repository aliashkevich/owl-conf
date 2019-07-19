import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';

import Jobs from './components/Jobs';
import Address from './components/Address';
import Schedule from './components/Schedule';
import Nav from './components/Header';

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
            <Nav />
            <Home />
            <Speakers speakers={this.state.speakers} />
            <Address />
            <Jobs />
            <Schedule timetable={this.state.timetable} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
