import React from 'react';

const person = (args) => {
    return (
        <div>
            <p onClick={args.click}>I'm {args.name} and I'm {args.age} years old</p>
            <input type="text" onChange={args.change} value={args.name}></input>
        </div>
    )
};

export default person;