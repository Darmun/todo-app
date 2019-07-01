import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";
import MenuButton from "./MenuButton.js";
import Button from "@material-ui/core/Button";

const styles = () => ({
  root: {
    position: "relative"
  },
  paper: {
    position: "absolute",
    top: 36,
    right: 0,
    left: 0,
    color: "black",
    zIndex: "100"
  },
  option: {
    fontFamily: "inherit",
    width: "100%"
  }
});

class ClickAway extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  handleSelect = option => {
    const { open } = this.state;
    if (open) {
      this.props.onOptionSelect(option);
    }
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <MenuButton onClick={this.handleClick}>Filter</MenuButton>
            {open ? (
              <Paper className={classes.paper}>
                <Button
                  className={classes.option}
                  onClick={() => this.handleSelect("all")}
                >
                  All
                </Button>
                <Button
                  className={classes.option}
                  onClick={() => this.handleSelect("checked")}
                >
                  Checked
                </Button>
                <Button
                  className={classes.option}
                  onClick={() => this.handleSelect("unchecked")}
                >
                  Unchecked
                </Button>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

ClickAway.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClickAway);
