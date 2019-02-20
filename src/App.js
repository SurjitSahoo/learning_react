import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'surjit', age: 22},
      {id: 2, name: 'nikunj', age: 99},
      {id: 3, name: 'prachee', age: 22}
    ],
    canRender : false
  }

  chngHandler = (event, id) => {
    this.setState({
      persons: [
        {name: 'suru', age: 20},
        {name: 'nikunj', age: 99},
        {name: event.target.value, age: 22}
      ]
  });
  }
  clickHandler = () => {
    this.setState({
      persons: [
        {name: 'suru', age: 20},
        {name: 'nikunj', age: 99},
        {name: 'prachee', age: 22}
      ]
    });
  }

  deleteHandler = (personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggle = () => {
    if(this.state.canRender) this.setState({canRender : false});
    else this.setState({canRender : true});
  }

  render() {

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
    let persons = null;
    
    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    } 
    if(this.state.canRender){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} 
            click={this.deleteHandler.bind(this, index)} key={person.id}
            change={this.chngHandler.bind(this, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>React</h1>
          <p className={classes.join(' ')}>oh yes.. it works</p>
          <button style={style} onClick={this.toggle}>Toggle Name</button>
          {this.state.canRender === true ? persons : null}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
