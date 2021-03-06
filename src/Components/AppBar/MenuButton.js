import Button from "@material-ui/core/Button";
import React from "react";
import Radium from "radium";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuButton: {
    marginLeft: 10
  }
};

function MenuButton(props) {
  const { children } = props;

  return (
    <div style={styles.container}>
      <Button
        color="inherit"
        variant="outlined"
        style={styles.menuButton}
        onClick={props.onClick}
      >
        {children}
      </Button>
    </div>
  );
}

export default Radium(MenuButton);
