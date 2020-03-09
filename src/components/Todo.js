import React from "react";
import "./Todo.css";

const ToDo = props => {
    return (
        <div onClick={()=>props.toggleDone(props.task.id)} className={props.task.completed ? "done" : ""}>
            <p>{props.task.task}</p>
        </div>
    )
};

export default ToDo;