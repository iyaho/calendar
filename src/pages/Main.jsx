import React from 'react';
import styled from 'styled-components'
import Calendar from 'react-calendar';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Calendar className="calendar"></Calendar>
      </>
    );
  }
}
export default Main;