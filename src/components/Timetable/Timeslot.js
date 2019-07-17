import React from 'react';

export default class Timeslot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      venue: '',
      topic: '',
      endtime: '',
      starttime: '',
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Timetable</h1>
      </React.Fragment>
    );
  }
}
