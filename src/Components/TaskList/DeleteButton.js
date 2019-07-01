import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Delete from "./delete.png";

const styles = {
  buttonSection: {
    position: "absolute",
    right: "5px",
    marginLeft: "0.5em"
  },
  deleteButton: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
  },
  deleteIcon: {
    width: 24,
    height: 24
  }
};

function DeleteButton({ classes, handleDelete }) {
  return (
    <div className={classes.buttonSection}>
      <button className={classes.deleteButton} onClick={handleDelete}>
        <img src={Delete} alt="delete" className={classes.deleteIcon} />
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeleteButton);
