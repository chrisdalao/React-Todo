import React from 'react';

import { toDoListData } from "./Todo";
import TodoList from "./TodoList";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            toDoData: toDoListData,
            task: ""
        };
    }

    addToDo = e => {
        e.preventDefault();
        const newToDo = {
            task: this.state.task
        }
        this.setState({
            toDoData: [...this.state.toDoData, newToDo]
        });
    };

    handleChanges = event => {
        console.log(event.target.value);
        this.setState({
          [event.target.name]: event.target.value
        });
      };


    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <div className="todo-list">
                    {this.state.toDoData.map((toDoFromMap, index) => (
                        <TodoList key={index} toDoProps={toDoFromMap} />
                    ))}
                </div>

                <form onSubmit={this.addToDo}>
                    <input 
                        placeholder="Add a task..." 
                        value={this.state.task}
                        onChange={this.handleChanges}
                        name="task"
                    />
                </form>

            </div>
        )
    }
}

export default TodoForm;