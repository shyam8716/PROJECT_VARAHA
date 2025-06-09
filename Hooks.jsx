import React, { useState } from 'react';

const My_hooks = () => {
    const [number, setNumber] = useState(10);

    const increment = () => {
        setNumber(number + 5);
    };
    const decrement = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    };
    const reset = () => {
        setNumber(0);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default My_hooks;