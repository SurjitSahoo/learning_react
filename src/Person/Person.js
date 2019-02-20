import React from 'react';
import Radium from 'radium';

const person = (args) => {

    const style = {
        '@media (min-width : 500px)' : {
            width : '450px'
        }
    }
    return (
        <div style={style}>
            <p onClick={args.click}>I'm {args.name} and I'm {args.age} years old</p>
            <input type="text" onChange={args.change} value={args.name}></input>
        </div>
    )
};

export default Radium(person);