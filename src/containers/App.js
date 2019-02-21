import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'surjit', age: 22},
      {id: 2, name: 'nikunj', age: 99},
      {id: 3, name: 'prachee', age: 22}
    ],
    canRender : false
  }

  
  // clickHandler = () => {
    //   this.setState({
      //     persons: [
        //       {name: 'suru', age: 20},
        //       {name: 'nikunj', age: 99},
        //       {name: 'prachee', age: 22}
        //     ]
        //   });
        // }
        
  chngHandler = (event, personIndex) => {
    this.setState({
      persons: [
        {name: 'suru', age: 20},
        {name: 'nikunj', age: 99},
        {name: event.target.value, age: 22}
      ]
    });
    console.log(event);
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

    let persons = null;
 
    if(this.state.canRender){
      persons = <Persons persons={this.state.persons}
                delete={this.deleteHandler}
                changed={this.chngHandler} />

    }
    return (
      <StyleRoot>
        <div className="App">
          <Cockpit showPersons={this.state.canRender} persons={this.state.persons} toggle={this.toggle}
          chngColor={this.state.canRender} />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
