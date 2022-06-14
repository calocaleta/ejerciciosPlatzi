import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

const defaultTodos = [
    { text: 'Cortar cebolla', completed: false},
    { text: 'Tomar el cursso de intro a React', completed: false},
    { text: 'Otra tarea interesante', completed: false},
    { text: 'Ejemplo 3', completed: true},
  ];


function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V2',defaultTodos);
      //const [ejemplo, saveEjemplo] = useLocalStorage('NOMBRE','Carlos');
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (searchValue.length < 0){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
        
      }
    
    
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos];
        newTodos[todoIndex].completed=true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
    
        saveTodos(newTodos);
      };
    
    /*
      console.log('Render (antes del use effect)')
    
      React.useEffect(() => {
        console.log('use effect');
      },[totalTodos]);
    
      console.log('Render (luego del use effect)')
    */

    return(
      <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}>
        {props.children}
      </TodoContext.Provider>  
    );
}

export {TodoContext, TodoProvider};