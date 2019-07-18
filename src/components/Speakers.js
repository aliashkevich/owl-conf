import React from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import './Speakers.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    style: {
      color: 'rgb(51, 155, 196)',
    },
  },
};

export default class Speakers extends React.Component {
  render() {
    console.log(this.props.speakers);
    return (
      <div>
        <Particles className='particles' params={particlesOptions} />
        <div>
          <h1 className='title'>Speakers</h1>
          <div className='container'>
            {this.props.speakers.map(speaker => (
              <div className='items bg-gray dib br3 pa3 ma2 bw2 shadow-5 grow'>
                <div className='item__wrapper'>
                  <img
                    className='speakersImg grow'
                    src={speaker.image}
                    alt=''
                  />
                  <p>
                    <span>Name:</span>
                    {speaker.name}
                  </p>
                  <p>
                    <span>Role:</span> {speaker.role}
                  </p>
                  <p>
                    <span>Topic:</span> {speaker.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
