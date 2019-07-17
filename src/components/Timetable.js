import React from 'react';
import moment from 'moment';
import Timetable from 'react-timetable-events';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   timetable: this.props.timetable,
    // };

    this.state = {
      timetableProps: {
        events: {
          'Day 1': [
            {
              id: 1,
              name: 'Custom Event 1',
              type: 'custom',
              startTime: moment('2018-02-23T11:30:00'),
              endTime: moment('2018-02-23T13:30:00'),
            },
          ],
          'Day 2': [
            {
              id: 2,
              name: 'Custom Event 2',
              type: 'custom',
              startTime: moment('2018-02-22T12:30:00'),
              endTime: moment('2018-02-22T14:30:00'),
            },
            {
              id: 3,
              name: 'Custom Event 3',
              type: 'custom',
              startTime: moment('2018-02-22T16:30:00'),
              endTime: moment('2018-02-22T18:45:00'),
            },
          ],
        },
        hoursInterval: [9, 21],
        timeLabel: 'Schedule',

        renderHour(hour, defaulAttributes, styles) {
          return (
            <div {...defaulAttributes} key={hour}>
              {hour}
            </div>
          );
        },

        renderEvent(event, defaultAttributes, styles) {
          return (
            <div {...defaultAttributes} title={event.name} key={event.id}>
              <span className={styles.event_info}>[ {event.name} ]</span>
              <span className={styles.event_info}>
                {event.startTime.format('HH:mm')} -{' '}
                {event.endTime.format('HH:mm')}
              </span>
            </div>
          );
        },
      },
    };
  }

  render() {
    return <Timetable {...this.state.timetableProps} />;
  }

  // render() {
  //   return <h1>TimeTable</h1>;
  // }
}
