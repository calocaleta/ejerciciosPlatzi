import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {

    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button
            className='CreateTodoButton'
            onClick={() => onClickButton('Ejemploo')}
        >+</button>
    );
};

export { CreateTodoButton };