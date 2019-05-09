import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuButton from './MenuButton';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
 
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit" >
            TODO App
          </Typography>
            <MenuButton onClick={props.addTask} btnText="add"/>
            <MenuButton onClick={props.removeTask} btnText="Remove"/>
            <MenuButton onClick={props.clearList} btnText="Clear"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);