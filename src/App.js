import React from 'react';
import './App.css';
import Filter from './containers/Filter'
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="container">
      <h1 className="app-title">Todo-list</h1>
      <Filter />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
