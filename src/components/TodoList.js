import React from "react";
import ToDo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class ToDoList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ul>
                {this.props.items.map(item=>(
                    <li><ToDo task={item} toggleDone={this.props.toggleDone}/></li>
                ))}
            </ul>
        )
    }
}

export default ToDoList;