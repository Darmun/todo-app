import React, { Component } from "react";
import "./App.css";
import AppBar from "./Components/AppBar";

class App extends Component {
  state = {
    tasks: []
  };

  addTask = () => {
    this.setState(function(prevState) {
      const index = prevState.tasks.length + 1;
      const taskString = "Task number " + index;
      return {
        tasks: [...prevState.tasks, taskString]
      };
    });
  };
  removeTask = () => {
    this.setState(function(prevState) {
      if (prevState.tasks.length > 0) {
        prevState.tasks.length--;
        return {
          tasks: [...prevState.tasks]
        };
      }
    });
  };

  clearList = () => {
    this.setState(function(prevState) {
        prevState.tasks.length = 0;
        return {
          tasks: prevState.tasks
        };
    });
  };

  render() {
    const { tasksArr } = this.state;
    return (
      <div className="App">
        <AppBar addTask={this.addTask} removeTask={this.removeTask} clearList={this.clearList} />
      </div>
    );
  }
}

export default App;
