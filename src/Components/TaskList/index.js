import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

function TaskList({tasksArr, handleDelete}) {
  let tasks;
  if (tasksArr) {
    tasks = tasksArr.map(({text, id}) => (
      <CSSTransition 
        key={id} 
        timeout={500} 
        classNames="item"
        handleDelete={() => handleDelete(id)}
      >
        <ListItem>
          {text}
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
