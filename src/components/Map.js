import React from 'react';
import './Map.css';

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

          {/* <h1>Owl Conference Location</h1>
          <h3>MB.io Cafe</h3>
          <img src={map} alt='map'  /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Mapowl;
