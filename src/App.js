import React, { Component } from "react";
import "./App.css";
import AppBar from "./Components/AppBar";
import TaskList from "./Components/TaskList/index";

let IdCounter = localStorage.getItem("Id") || 0;
class App extends Component {
  state = {
    tasks: [] ,
    filterSetting: "all"
  };

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.setState({tasks: JSON.parse(savedTasks)});
    }
  }

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("Id", IdCounter);
  }

  handleAddTask = taskText => {
    this.setState(prevState => {
      const newTask = {
        text: taskText,
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
    const { tasks, filterSetting } = this.state;

    return (
      <div className="App">
        <AppBar
          addTask={this.handleAddTask}
          removeTask={this.handleRemoveTask}
          clearList={this.handleClearList}
        />
        <TaskList 
        tasksArr={tasks} 
        filterSetting={filterSetting}
        handleDelete={this.handleDeleteTask} />
      </div>
    );
  }
}

export default App;
