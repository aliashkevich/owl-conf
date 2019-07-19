import React from 'react';
import './Jobs.css';
import jobs from '../images/jobs.jpeg';

export default class Jobs extends React.Component {
  render() {
    return (
      <div class='wrapper'>
        <div>
          <div>
            <h1 className='title'>Jobs</h1>
          </div>
          <img src={jobs} alt='jobs' className='img' />
          <div className='text'>
            <p>
              You have special skills and digital super powers? We have the
              right set of roles for you. You are welcome to become part of the
              Mercedes-Benz.io family and to work with us on shaping the digital
              future of Mercedes-Benz. Self-managed. Team-based.
              Customer-centric.
            </p>
            <div className='middle'>
              <a href='https://goo.gl/maps/fXBf5gF2nvWJEQF17' target='_blank'>
                Mercedes Benz Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
