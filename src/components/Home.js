import React from 'react';
import '../styles/Home.css';
import Dots from '../microcomponents/dots.js';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dots />
        <div className='body-home'>
          <h1 className='letter'>Home</h1>
        </div>
      </React.Fragment>
    );
  }
}
