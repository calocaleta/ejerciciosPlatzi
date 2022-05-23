import React from 'react';
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
};

const TodoCounter = ({total,completed}) => {
/*    
    return (
        <h2 style={{
            color: 'red',
            backgroundColor: 'yellow',
        }}>Has completado 2 de 3 TODOs</h2>
    );
    */
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
    );
};

export {TodoCounter};