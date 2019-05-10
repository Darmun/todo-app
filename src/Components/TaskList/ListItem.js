import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  listItem: {
    font: "200 20px Helvetica, Verdana, sans-serif",
    lineHeight: "1.8rem"
  }
};

function ListItem(props) {
  const { classes } = props;

  return (
  <li className={classes.listItem}>
    {props.children}
  </li>
  );
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItem);
