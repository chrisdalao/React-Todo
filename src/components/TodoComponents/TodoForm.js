import React from 'react';

const TodoForm = props => {
    return (
      <form>
        <input
          onChange={props.handleTodoChange}
          name="toDo"
          value={props.value}
          placeholder="Add something to do..."
        />
        <button onClick={props.handleAddTodo}>Add To Do</button>
        <button onClick={props.handleClearTodo}>Clear Completed</button>
      </form>
    );
  };

export default TodoForm;