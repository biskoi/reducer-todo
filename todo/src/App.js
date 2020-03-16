import React, {useReducer}from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {reducer, initialState} from './reducers/reducer';

function App() {

const [Todos, dispatch] = useReducer(reducer, initialState);
console.log(Todos);

const addTask = (newTodo) => {
dispatch({type: 'ADD_TASK', payload: newTodo})
}

const toggleStatus = (taskId) => {
dispatch({type: 'TOGGLE_STATUS', payload: taskId})
}

const removeCompleted = () => {
  dispatch({type: 'REMOVE_COMPLETED'})
}

  return (
    <div className="App">
      <p>AAAA</p>
      <TodoForm addTask = {addTask} removeCompleted = {removeCompleted}/>
      <TodoList data = {Todos} toggleStatus = {toggleStatus}/>
    </div>
  );

}

export default App;
