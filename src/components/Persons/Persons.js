import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    constructor(props){
        super(props);
        this.lastPerson = React.createRef(); //will hold a ref from person component
    }

    componentDidMount(){
        this.lastPerson.current.focus();
    }
    render(){
        return this.props.persons.map((person, index) => {
            return <Person 
            click={() => this.props.delete(index)}
            key={person.id}
            name={person.name} 
            age={person.age}
            ref={this.lastPerson}
            changed={(event ) => this.props.changed(event, person.id)} />
        });

    }
}

export default Persons;