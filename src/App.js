import React, { Component } from "react";
import "./App.css";
import AppBar from "./Components/AppBar";
import TaskList from "./Components/TaskList/index";
class App extends Component {
  state = {
    tasks: []
  };

  handleAddTask = () => {
    this.setState(function(prevState) {
      const index = prevState.tasks.length + 1;
      const taskString = "Task number " + index;
      return {
        tasks: [...prevState.tasks, taskString]
      };
    });
  };

  handleRemoveTask = () => {
    this.setState(function(prevState) {
      if (prevState.tasks.length > 0) {
        prevState.tasks.length--;
        return {
          tasks: [...prevState.tasks]
        };
      }
    });
  };

  handleClearList = () => {
    this.setState(function(prevState) {
        prevState.tasks.length = 0;
        return {
          tasks: prevState.tasks
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
        <TaskList tasksArr={tasks} />
      </div>
    );
  }
}

export default App;
