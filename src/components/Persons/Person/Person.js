import React, { Component } from 'react';
import Radium from 'radium';

class Person extends Component {

    // let style = {
    //     '@media (min-width : 500px)' : {
    //         width : '450px'
    //     }
    // };

    render(){
        return (
            <div>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed}></input>
            </div>
        )
    }
}

export default Radium(Person);