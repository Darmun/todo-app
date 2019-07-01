import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ClearButton from "./ClearButton";
import TextField from "./TextField.js";
import Filter from "./Filter.js";


const styles = {
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
};

function SimpleAppBar({ classes, addTask, clearList, manageFilter }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" color="inherit" >
            TODO App
          </Typography> */}
          <TextField onChange={addTask} />
          <ClearButton onClick={clearList}>Clear</ClearButton>
          <Filter onOptionSelect={manageFilter}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
