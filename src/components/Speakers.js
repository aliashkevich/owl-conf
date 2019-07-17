import React from 'react';
import 'tachyons';
import './Speakers.css';

export default class Speakers extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Speakers</h1>
        <div className='items'>
          <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img
              className='speakers'
              src='https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg'
              alt=''
            />
            <h2>Name: Mark Erikson</h2>
            <p>Role: Software Engineer @ Northrop Grumman Corporation</p>
            <p>Topic: A Deep Dive into React-Redux</p>
          </div>
          <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img
              className='speakers'
              src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
              alt='Netta Bondy'
            />
            <h2>Name: Netta Bondy</h2>
            <p>Role: Web Developer @ Reali</p>
            <p>Topic: A Deep Dive into React-Redux</p>
          </div>
          <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
            <img
              className='speakers'
              src='https://peopledotcom.files.wordpress.com/2018/02/two-tone-cat.jpg'
              alt='David Lorenz'
            />
            <h2>Name: David Lorenz</h2>
            <p>Role: Frontend Developer @ MB.io</p>
            <p>Topic: A Deep Dive into React-Redux</p>
          </div>
        </div>
      </div>
    );
  }
}
