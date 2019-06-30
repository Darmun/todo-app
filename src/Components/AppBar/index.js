import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuButton from "./MenuButton";
import TextField from "./TextField.js";
import Filter from "./Filter.js";

const styles = {
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
};

function SimpleAppBar({ classes, addTask, clearList }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" color="inherit" >
            TODO App
          </Typography> */}
          <TextField onChange={addTask} />
          <MenuButton onClick={clearList}>Clear</MenuButton>
          <Filter />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
