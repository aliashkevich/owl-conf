import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mapowl extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map google={this.props.google} zoom={10}>
        <Marker onClick={this.onMarkerClick} name={'germany'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.germany}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
//

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD6esplI5T6jo_KauuSUz7rILmXSfWBdTs',
})(Mapowl);
