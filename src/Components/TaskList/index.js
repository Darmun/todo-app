import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuButton: {
      marginLeft: 10,
    },
  };

function TaskList(props) {
    const { classes } = props;
    let tasks;
    if(props.tasksArr){
      tasks = props.tasksArr.map((taskItem,index) =>
      <li key={index}>{taskItem}</li>)
    }
    return (
      <ul>
         {tasks}   
      </ul>
    );
  }
  
  TaskList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TaskList);