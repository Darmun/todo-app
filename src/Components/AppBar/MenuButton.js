import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuButton: {
      marginLeft: 10,
    },
  };

function MenuButton(props) {
    const { classes, btnText } = props;
  
    return (
      <div>
            <Button color="inherit"
             variant="outlined"
              className={classes.menuButton}
              onClick={props.onClick}>
              {btnText}

            </Button>
      </div>
    );
  }
  
  MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuButton);