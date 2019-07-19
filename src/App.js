import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Address from './components/Address';
import Timetable from './components/Timetable';
import Nav from './components/Header';
import Mapowl from './components/Map';

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
            <About />
            <Speakers />
            <Timetable timetable={this.state.timetable} />
            <Jobs />
            <Mapowl />
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
