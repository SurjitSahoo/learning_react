import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/withClass';
import classes from './Person.module.css'

class Person extends Component {

    // simple approach for heigher order component with class
    // render(){
    //     return (
    //         <WithClass classes={classes.Person}>
    //             <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
    //             <input type="text" onChange={this.props.changed}></input>
    //         </WithClass>
    //     )
    // }
    // export default Person;

    // better approach for heigher order component with class
    constructor(){
        super();
        this.inputElement = React.createRef();
    }

    // componentDidMount(){
    //     this.inputElement.current.focus();
    // }

    focus(){
        this.inputElement.current.focus();
    }

    render(){
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed}
                // ref={(inp) => { this.inputElement = inp }} 
                ref={this.inputElement} 
                />
            </Aux>
        )
    }
}

// Type checking
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default WithClass(Person, classes.Person);