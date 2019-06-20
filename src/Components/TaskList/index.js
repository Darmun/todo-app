import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListItem from "./ListItem";

const unorderedListStyle = {
  paddingInlineStart: 0,
  marginBlockStart: 0,
}

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
    <ul style={unorderedListStyle}>
      <TransitionGroup>
        {tasks}
      </TransitionGroup>
    </ul>
  );
}

export default TaskList;
