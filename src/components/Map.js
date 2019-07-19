import React from 'react';
import './Map.css';
import owl from '../images/owl.png';
import MapCard from './CardMap';

class Mapowl extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='body-map'>
          <div className='title'>
            <h1>Location</h1>
          </div>
          <div className='card'>
            <MapCard />
          </div>
          <div>
            <img src={owl} alt='logo' className='owl' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mapowl;
