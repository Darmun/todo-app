import React from "react";
import Radium, { StyleRoot } from "radium";

const styles = {
  textField: {
    border: "none",
    padding: "0.7em",
    borderRadius: "5px",
    boxShadow: "inset 0px 0px 10px #000000",
    transition: "box-shadow 0.5s ease-in",
    ":focus": {
      boxShadow: "inset 0px 0px 0px #000000"
    }
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

  handleKeyPress = e => {
    const { fieldValue } = this.state;
    // only if enter is pressed
    if (e.which === 13 && fieldValue) {
      this.props.onChange(fieldValue);
      this.setState({
        fieldValue: ""
      });
    }
  };

  render() {
    return (
      <StyleRoot>
        <div>
          <input
            type="text"
            placeholder="type task and hit enter"
            style={styles.textField}
            value={this.state.fieldValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </StyleRoot>
    );
  }
}

const StyledComponent = Radium(TextField);

export default StyledComponent;
