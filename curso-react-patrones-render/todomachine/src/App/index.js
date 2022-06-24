import React from "react";
//import {TodoProvider} from '../TodoContext';
//import {AppUI} from './AppUI';

function App(){
  const [state, setState] = React.useState('');

  return(
    <React.Fragment>
      <TodoHeader />
      <TodoList />
    </React.Fragment>
  );
}

function TodoHeader(){
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
    </React.Fragment>
  );
}
function TodoList(){
  return(
    <React.Fragment>
      <TodoItem/>
    </React.Fragment>
  );
}

function TodoCounter(){
  return(
    <p>
      TodoCounter
    </p>
  );
}
function TodoSearch(){
  return(
    <p>
      TodoSearch
    </p>
  );
}
function TodoItem(){
  return(
    <p>
      TodoItem
    </p>
  );
}
/*
function App() {
  return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
  );
}
*/

export default App;

