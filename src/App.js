import React from 'react';
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : []
    }
  }
  saveList = () => {
    localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList));
  }
  addToDo = (task) => {
    this.setState({
      toDoList: [...this.state.toDoList, {task: task, id: Date.now(), completed: false}]
    });
    this.saveList();
  }
  toggleDone = (taskId) => {
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        if (task.id === taskId) {
          return {...task, completed: !task.completed};
        } else {
          return task;
        }
      })
    });
    this.saveList();
  }
  clearDone = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(task => {
        return (!task.completed);
      })
    });
    this.saveList();
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList items={this.state.toDoList} toggleDone={this.toggleDone}/>
        <ToDoForm addToDo={this.addToDo} clearDone={this.clearDone}/>
      </div>
    );
  }
}

export default App;
