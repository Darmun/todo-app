import Button from "@material-ui/core/Button";
import React from "react";
import Radium from "radium";

const styles = {
  menuButton: {
    marginLeft: 10
  },
  container: {
    "@media screen and (max-width: 400px)": {
      display: "none"
    }
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
