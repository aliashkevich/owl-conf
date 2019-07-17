import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Address from './components/Address';
import Timetable from './components/Timetable';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: {},
      address: {},
      speakers: [],
      timetable: [],
      about: {},
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
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Home />
        {/* <Header />
        <About />
        <Speakers />
        <Timetable />
        <Address />
        <Jobs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
