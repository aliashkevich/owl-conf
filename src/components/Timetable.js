import React from 'react';
import moment from 'moment';
import Timetable from 'react-timetable-events';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timetable: this.props.timetable,
      events: null,
    };

    this.convertTime = this.convertTime.bind(this);
    this.parseEvents = this.parseEvents.bind(this);
    this.renderHour = this.renderHour.bind(this);
    this.renderEvent = this.renderEvent.bind(this);
  }

  componentDidMount() {
    this.parseEvents();
  }

  convertTime(time) {
    return time.split('.')[0].length > 1
      ? `${time.replace('.', ':')}:00`
      : `0${time.replace('.', ':')}:00`;
  }

  parseEvents() {
    var events = {};

    for (var i = 0; i < this.state.timetable.length; i++) {
      var day = this.state.timetable[i].name;
      var talks = [];
      for (var j = 0; j < this.state.timetable[i].timeslot.length; j++) {
        var timeslotItem = this.state.timetable[i].timeslot[j];
        var dateParts = this.state.timetable[i].date.split('.');
        var date = dateParts.reverse().join('-');

        var talk = {
          id: j,
          name: timeslotItem.topic,
          type: 'custom',
          startTime: moment(
            `${date}T${this.convertTime(timeslotItem.starttime)}`,
          ),
          endTime: moment(`${date}T${this.convertTime(timeslotItem.endtime)}`),
        };
        talks.push(talk);
      }
      events[day] = talks;
    }

    this.setState({
      events: events,
    });
  }

  renderHour(hour, defaulAttributes, styles) {
    return (
      <div {...defaulAttributes} key={hour}>
        {hour}
      </div>
    );
  }

  renderEvent(event, defaultAttributes, styles) {
    return (
      <div {...defaultAttributes} title={event.name} key={event.id}>
        <span className={styles.event_info}>[ {event.name} ]</span>
        <span className={styles.event_info}>
          {event.startTime.format('HH:mm')} - {event.endTime.format('HH:mm')}
        </span>
      </div>
    );
  }

  render() {
    if (this.state.events === null) {
      return null;
    } else {
      return (
        <Timetable
          events={this.state.events}
          hoursInterval={[9, 21]}
          timeLabel={'Schedule'}
        />
      );
    }
  }
}
