import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import './App.css';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoTask: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      toDo: ''
    };
  }

  toggleTodo = id => {
    this.setState(prevState => {
      return {
        toDoTask: prevState.toDoTask.map(toDo => {
          if (toDo.id === id) {
            return {
              ...toDo,
              completed: !toDo.completed
            };
          } else {
            return toDo;
          }
        })
      }
    })
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.toDo,
      completed: false,
      id: Date.now()
    };
    this.setState(prevState => {
      return {
        toDoTask: [...prevState.toDoTask, newTodo],
        toDo: ''
      };
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  clearCompletedTodo = e => {
    e.preventDefault();
    const toDoTask = this.state.toDoTask.filter(toDo => toDo.completed === false);
    this.setState({ toDoTask });
  }


  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
        <TodoList
          toDoTask={this.state.toDoTask}
          toggleTodo={this.toggleTodo}
        />
        <TodoForm
          value={this.state.toDo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodo={this.clearCompletedTodo}
        />
        </div>
      </div>
    );
  }

}

export default App;