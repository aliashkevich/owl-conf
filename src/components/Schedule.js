import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Table} from 'reactstrap';
import classnames from 'classnames';
import './Schedule.css';
import $ from 'jquery';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  componentDidMount = () => {
    $('tr').hide();
    $('tr').each(function(index) {
      $(this)
        .delay(index * 500)
        .show(1000);
    });
  };

  render() {
    return (
      <div className='screen schedule'>
        <h1>Schedule</h1>
        <Nav className='center-tabs'>
          {this.props.timetable.map((timetableItem, index) => (
            <React.Fragment>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === index,
                  })}
                  onClick={() => {
                    this.toggle(index);
                  }}>
                  <span className='wrapper event'>{timetableItem.name}</span>
                  <p>{timetableItem.date}</p>
                </NavLink>
              </NavItem>
            </React.Fragment>
          ))}
        </Nav>
        <React.Fragment>
          <TabContent activeTab={this.state.activeTab}>
            {this.props.timetable.map((timetableItem, index) => (
              <TabPane tabId={index}>
                <Table responsive dark id='schedule'>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Room</th>
                      <th>Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableItem.timeslot.map((slot, slotIndex) => (
                      <tr key={slotIndex} className={slot.venue.toLowerCase()}>
                        <td>
                          {slot.starttime} - {slot.endtime}
                        </td>
                        <td className='room'>{slot.venue}</td>
                        <td>{slot.topic.toUpperCase()}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TabPane>
            ))}
          </TabContent>
        </React.Fragment>
      </div>
    );
  }
}
