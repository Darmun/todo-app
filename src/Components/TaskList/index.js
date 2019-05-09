import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const styles = {
  listItem: {
    font: "200 20px Helvetica, Verdana, sans-serif",
    lineHeight: "1.8rem"
  }
};

function TaskList(props) {
  const { classes } = props;
  let tasks;
  if (props.tasksArr) {
    tasks = props.tasksArr.map((taskItem, index) => (
      <CSSTransition 
      key={index} 
      timeout={500} 
      classNames="item"
      >
        <li className={classes.listItem}>
          {taskItem}
        </li>
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

TaskList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TaskList);
