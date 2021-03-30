import React from 'react';

export default function CounterDisplay(props) {
    console.log(props)
    return(
        <div>
            <p>{props.count}</p>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}