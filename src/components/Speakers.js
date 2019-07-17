import React from 'react';
import 'tachyons';
import './Speakers.css';

export default class Speakers extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Speakers</h1>
        <div className='items'>
          {this.props.speakers.map(speaker => (
            <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
              <img className='speakers' src={speaker.image} alt='' />
              <h2>Name: {speaker.name}</h2>
              <p>Role: {speaker.role}</p>
              <p>Topic: {speaker.topic}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
