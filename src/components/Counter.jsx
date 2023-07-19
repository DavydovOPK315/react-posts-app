import React, { useState } from 'react';

const Counter = () => {

    // distuctorization
    const [likes, setLikes] = useState(0);
    const [text, setText] = useState('Inital text');

    function decrement() {
        setLikes(likes - 1);
    }

    function increment() {
        setLikes(likes + 1);
    }

    function changeInputText(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>Text: {text}</h1>
            <input
                type='text'
                value={text}
                onChange={event => changeInputText(event)}
            />
            <h1>Count of likes: {likes}</h1>
            <button type='submit' onClick={increment}>Increment</button>
            <button type='submit' onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;