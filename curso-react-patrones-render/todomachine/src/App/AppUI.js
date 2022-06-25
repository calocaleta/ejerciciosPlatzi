import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodoHeader} from '../TodoHeader';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';


const AppUI = () => {
  const
    { error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <TodoHeader
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        

          <TodoList>
          {error && <p>Atención, hubo un error!</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

          </TodoList>
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>            
          )}

        
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
      </React.Fragment>
    );
};

export { AppUI };