import React, { Component } from "react";
import "./App.css";
import AppBar from "./Components/AppBar";
import TaskList from "./Components/TaskList/index";

let IdCounter = 0;
class App extends Component {
  state = {
    tasks: []
  };

  handleAddTask = () => {
    this.setState(prevState => {
      const index = prevState.tasks.length + 1;
      const newTask = {
        text: "Task number " + index,
        id: IdCounter
      };
      IdCounter++;
      return {
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  handleRemoveTask = () => {
    this.setState(prevState => {
      if (prevState.tasks.length > 0) {
        prevState.tasks.length--;
        return {
          tasks: [...prevState.tasks]
        };
      }
    });
  };

  handleClearList = () => {
    this.setState(prevState => {
      prevState.tasks.length = 0;
      return {
        tasks: prevState.tasks
      };
    });
  };

  handleDeleteTask = id => {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter(task => task.id !== id)
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        <AppBar
          addTask={this.handleAddTask}
          removeTask={this.handleRemoveTask}
          clearList={this.handleClearList}
        />
        <TaskList tasksArr={tasks} handleDelete={this.handleDeleteTask} />
      </div>
    );
  }
}

export default App;
