import React from "react";
import {useTodos} from './useTodos';
import {TodoHeader} from '../TodoHeader';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';

const TodosError = () => {
  return(
    <p>Atención, hubo un error!</p>
  )
}
const TodoLoading = () => {
  return(
    <p>Estamos cargando, no desesperes...</p>
  )
}
const EmptyTodos = () => {
  return(
    <p>Crea tu primer TODO!</p>
  )
}

function App() {
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
      addTodo
    } = useTodos();


  return (
    <React.Fragment>
      <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
        {openModal && (
          <Modal>
            <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            />
          </Modal>            
        )}

      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;