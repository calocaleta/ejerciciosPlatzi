import React from 'react';
//import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
};

const TodoCounter = ({totalTodos,completedTodos}) => {
    //const {totalTodos,completedTodos} = React.useContext(TodoContext);
/*    
    return (
        <h2 style={{
            color: 'red',
            backgroundColor: 'yellow',
        }}>Has completado 2 de 3 TODOs</h2>
    );
    */
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Todos</h2>
    );
};

export {TodoCounter};