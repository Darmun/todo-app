import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

function TaskList(props) {
  let tasks;
  if (props.tasksArr) {
    tasks = props.tasksArr.map((taskItem, index) => (
      <CSSTransition 
        key={index} 
        timeout={500} 
        classNames="item"
      >
        <ListItem>
          {taskItem}
        </ListItem>
      </CSSTransition>
    ));
  }; 
  
  return (
    <ul>
      <TransitionGroup>
        {tasks}
      </TransitionGroup>
    </ul>
  );
}

export default TaskList;
