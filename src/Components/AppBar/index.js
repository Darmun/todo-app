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
  },
 
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" >
            TODO App
          </Typography>
            <MenuButton onClick="doda" btnText="add"/>
            <MenuButton onClick="usunie" btnText="Remove"/>
            <MenuButton onClick="czysci" btnText="Clear"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);