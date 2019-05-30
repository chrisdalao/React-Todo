// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <div>
        {props.toDoTask.map(toDo => (
          <Todo
            key={toDo.id}
            toDo={toDo}
            toggleTodo={props.toggleTodo}
          />
        ))}
      </div>
    );
  };
  
export default TodoList;