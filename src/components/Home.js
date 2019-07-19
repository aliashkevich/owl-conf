import React from 'react';
import logo from '../images/logo.svg';
import owl_logo from '../images/owl_white_font.png';
// import car from '../images/car.png';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className='body-home screen'>
        {/* <div className='car'>
          <img src={car} alt='car' />
        </div> */}
        <div className='wrapper'>
          <img className='owl_logo' src={owl_logo} alt='Owl Logo' />
          <h2 className='home_title'>The current state of Software Development at MB.io</h2>
          <h2 className='home_about'>
            Bring it owl. The Owl was a symbol for Athena, goddess of wisdom and strategy. The
            OwlConf brings out the strategic knowledge to a business perspective within MB.io.
            <br />
            Together we will check out the current state of development at MB.io to get a grasp of
            the amazing technical achievements we <br />
            provide on a daily basis in each of the different products.
          </h2>
        </div>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
      </div>
    );
  }
}
