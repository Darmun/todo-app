import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuButton: {
    marginLeft: 10
  }
};

class TextField extends React.Component {
  state = {
    fieldValue: ""
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      fieldValue: value
    });
  };
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="type task and hit enter"
          value={this.state.fieldValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withStyles(styles)(TextField);
