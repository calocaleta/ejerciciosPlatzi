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
import ChangeAlertWithStorageListener from '../ChangeAlert';

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
      addTodo,
      sincronizeTodos,
    } = useTodos();


  return (
    <React.Fragment>
      <TodoHeader 
        loading={loading}
      >
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            // loading={loading}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading}
          />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
        /*render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
        */
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
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

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;