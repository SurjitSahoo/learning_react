import React from 'react';
import Radium from 'radium';
import './Cockpit.css';

const cockpit = (props) => {

    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }
    const classes = [];

    if(props.persons.length <= 2){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }
    if(props.chngColor & props.persons.length > 0){
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'pink',
        color : 'black'
      }
    }

    return (
      <div className="Cockpit">
          <h1>React</h1>
          <p className={classes.join(' ')}>oh yes.. it works</p>
          <button style={style} onClick={props.toggle}>Toggle Name</button>
          {/* {props.canRender === true ? persons : null} */}
      </div>
    )
}

export default Radium(cockpit);