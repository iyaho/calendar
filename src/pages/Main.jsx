import React from 'react';
import styled from 'styled-components'
import Calendar from 'react-calendar';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      date: new Date(2019,11,25),
      newdate : []
    }
  }
  
  render() {
    return (
      <>
        <Calendar
          className="calendar"
          onClickDay={console.log(date)}
          value={this.state.date}
        />
      </>
    );
  }
}
export default Main;