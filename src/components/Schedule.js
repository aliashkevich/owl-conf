import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Table,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import './Schedule.css';

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

  render() {
    return (
      <div className='screen'>
        <h1>Schedule</h1>
        <Nav tabs>
          {this.props.timetable.map((timetableItem, index) => (
            <React.Fragment>
              <Col lg='6' className='custom-tab'>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === index,
                    })}
                    onClick={() => {
                      this.toggle(index);
                    }}>
                    <span>{timetableItem.name}</span>
                    <p>{timetableItem.date}</p>
                  </NavLink>
                </NavItem>
              </Col>
            </React.Fragment>
          ))}
        </Nav>
        <React.Fragment>
          <TabContent activeTab={this.state.activeTab}>
            {this.props.timetable.map((timetableItem, index) => (
              <TabPane tabId={index}>
                <Table hover id='schedule'>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Room</th>
                      <th>Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableItem.timeslot.map((slot, slotIndex) => (
                      <tr key={slotIndex}>
                        <td>
                          {slot.starttime} - {slot.endtime}
                        </td>
                        <td>{slot.venue}</td>
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
