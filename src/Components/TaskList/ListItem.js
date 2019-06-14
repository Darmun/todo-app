import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Delete from "./delete.png";
import CheckBox from "./Checkbox.js"

const styles = {
  listItem: {
    font: "200 20px Helvetica, Verdana, sans-serif",
    lineHeight: "1.8rem",
    display: "flex",
    alignItems:"center",
    transition: "all 0.5s",
  },
  buttonSection:{
    marginLeft:"0.5em"
  },
  deleteButton: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "all 0.5s",
  },
  deleteIcon:{
    width:24,
    height:24,
  },
  done:{
    backgroundColor: "rgb(147, 255, 178, 0.3)",
    color:"rgba(73, 215, 125, 1)"
  },
  taskCheckBox:{
    marginRight:"1em"
  }
};

class ListItem extends Component {
  state = {
    taskDone: false
  };

  toggleTaskStatus = ({target:{checked}}) => {
    this.setState({
      taskDone: checked
    });
  };

  render() {
    const { classes, handleDelete } = this.props;

    return (
      <li className={`${classes.listItem} ${this.state.taskDone ? classes.done : ""}`}>
        <CheckBox onChange={this.toggleTaskStatus} />
        {this.props.children}
        <div className={classes.buttonSection}>
        <button className={classes.deleteButton} onClick={handleDelete}>
          <img src={Delete} alt="delete" className={classes.deleteIcon}/>
        </button>
        </div>
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItem);
