// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <div className="to-do-list">
                    <div>{this.props.toDoProps.task}</div>
                    {/* <div>{this.props.toDoProps.id}</div> */}
                    {/* <div>{String(this.props.toDoProps.completed)}</div> */}
                </div>
            </div>
        )
    }
}

export default TodoList;