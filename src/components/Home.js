import React from 'react';
import owl from '../image/owl.png';
import '../styles/Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='body-home'>
          <h1>Owl Conference</h1>
          <h2>The current state of Software Development at MB.io</h2>
          <h4>
            Bring it owl. The Owl was a symbol for Athena, goddess of wisdom and
            strategy. The OwlConf brings out the strategic knowledge to a
            business perspective within MB.io. Together we will check out the
            current state of development at MB.io to get a grasp of the amazing
            technical achievements we provide on a daily basis in each of the
            different products.
          </h4>
          <div className='logo'>
            <img src={owl} alt='Logo' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
