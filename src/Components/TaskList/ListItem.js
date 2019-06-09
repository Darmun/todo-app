import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Delete from "./delete.png";

const styles = {
  listItem: {
    font: "200 20px Helvetica, Verdana, sans-serif",
    lineHeight: "1.8rem"
  },
  deleteButton: {}
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
    const { classes } = this.props;

    return (
      <li className={classes.listItem}>
        <input type="checkbox" onChange={this.toggleTaskStatus} />
        {this.props.children}
        <button className={classes.deleteButton}>
          <img src={Delete} alt="delete" />
        </button>
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItem);
