import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div 
      className={`toDo${props.toDo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodo(props.toDo.id)}
      > 
      {props.toDo.task} 
      </div>
  );
};

export default Todo;