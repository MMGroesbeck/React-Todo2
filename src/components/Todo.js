import React from "react";
import "./Todo.css";

// const ToDo = props => {
//     return (
//         <div onClick={()=>props.toggleDone(props.task.id)} className={`task ${props.task.completed ? "done" : ""}`}>
//             <p>{props.task.task}</p>
//         </div>
//     )
// };

class ToDo extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div onClick={()=>this.props.toggleDone(this.props.task.id)} className={`task ${this.props.task.completed ? "done" : ""}`}>
                <p>{this.props.task.task}</p>
            </div>
        )
    }
}

export default ToDo;