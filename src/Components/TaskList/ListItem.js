import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CheckBox from "./Checkbox.js";
import DeleteButton from "./DeleteButton.js";

const styles = {
  listItem: {
    font: "200 20px Helvetica, Verdana, sans-serif",
    lineHeight: "1.8rem",
    display: "flex",
    position: "relative",
    alignItems: "center",
    transition: "all 500ms",
    padding: "0.5em"
  },
  done: {
    backgroundColor: "rgb(147, 255, 178, 0.3)",
    color: "rgba(73, 215, 125, 1)"
  },
  taskText: {
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto",
    width: "70%"
  },
  visible: {
    display: "flex"
  },
  hidden: {
    display: "none"
  }
};

class ListItem extends Component {
  state = {
    taskDone: false
  };

  componentDidMount() {
    const savedState = JSON.parse(
      localStorage.getItem(this.props.id.toString())
    );

    if (savedState) {
      this.setState({
        taskDone: savedState
      });
    }
  }

  componentDidUpdate() {
    const taskDone = this.state.taskDone.toString();
    localStorage.setItem(this.props.id.toString(), taskDone);
  }

  toggleTaskStatus = ({ target: { checked } }) => {
    this.setState({
      taskDone: checked
    });
  };

  render() {
    const { classes, handleDelete, filterSetting } = this.props;
    let convertedSetting;
    switch (filterSetting) {
      case "checked":
        convertedSetting = true;
        break;
      case "unchecked":
        convertedSetting = false;
        break;
      default:
        convertedSetting = true;
    }
    const visibility =
      filterSetting === "all" || convertedSetting === this.state.taskDone
        ? classes.visible
        : classes.hidden;

    return (
      <li
        className={`${classes.listItem} ${visibility} ${
          this.state.taskDone ? classes.done : ""
        }`}
      >
        <CheckBox
          onChange={this.toggleTaskStatus}
          checked={this.state.taskDone}
        />
        <div className={classes.taskText}>{this.props.children}</div>
        <DeleteButton handleDelete={handleDelete} />
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItem);
