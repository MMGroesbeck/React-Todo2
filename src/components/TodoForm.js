import React from "react";

class ToDoForm extends React.Component {
    constructor () {
        super();
        this.state = {
            task: ""
        }
    };
    handleChanges = e => {
        this.setState({
            task: e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addToDo(this.state.task);
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="task" value={this.state.task} onChange={this.handleChanges}/>
                <button>Add Task</button>
            </form>
            <button onClick={()=>this.props.clearDone()}>Clear Completed Tasks</button></div>
        );
    }
}

export default ToDoForm;