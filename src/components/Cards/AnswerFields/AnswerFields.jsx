import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox, Radio, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
  },
});

// for short answer option
function ShortAnswer(props) {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;
      <TextField
        disabled
        id="standard-disabled"
        defaultValue="Short answer text"
        style={{ minWidth: "25vw" }}
        onClick={props.editArr}
      />
      <h3>{props.arr}</h3>
    </div>
  );
}

// for checkbox option
function Checkboxes(props) {
  const classes = useStyles();
  return (
    <div>
      &nbsp;&nbsp;&nbsp;
      <FormControlLabel disabled control={<Checkbox name="checkedE" />} />
      <TextField
        InputProps={{ classes }}
        defaultValue="Option 1"
        style={{ minWidth: "55vw", paddingTop: "5px" }}
        color="secondary"
      />
      <br />
      <CheckboxOption appendCheckbox={props.appendCheckbox} arr={props.arr} />
    </div>
  );
}

// for rendering multiple checkbox options
function CheckboxOption(props) {
  const classes = useStyles();
  return (
    <div>
      &nbsp;&nbsp;&nbsp;
      <FormControlLabel disabled control={<Checkbox name="checkedE" />} />
      <TextField
        InputProps={{ classes }}
        placeholder="Add option or leave blank"
        style={{ minWidth: "55vw", paddingTop: "5px" }}
        color="secondary"
        onClick={props.appendCheckbox}
      />
      {props.arr}
    </div>
  );
}

// for MCQ option
function Mcq(props) {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;
      <FormControlLabel value="disabled" disabled control={<Radio />} />
      <TextField
        defaultValue="Option 1"
        style={{ minWidth: "55vw", paddingTop: "5px" }}
        color="secondary"
      />
      <br />
      <McqOption appendCheckbox={props.appendCheckbox} arr={props.arr} />
    </div>
  );
}

// for rendering multiple MCQ options
function McqOption(props) {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;
      <FormControlLabel value="disabled" disabled control={<Radio />} />
      <TextField
        placeholder="Add option or leave blank"
        style={{ minWidth: "55vw", paddingTop: "5px" }}
        color="secondary"
        onClick={props.appendCheckbox}
      />
      {props.arr}
    </div>
  );
}

class AnswerFields extends React.Component {
  constructor() {
    super();
    this.state = {
      checkbox: [],
      mcq: [],
    };
  }

  appendCheckboxes = () => {
    this.setState({
      checkbox: this.state.checkbox.concat(<CheckboxOption />),
    });
  };

  appendMcq = () => {
    this.setState({
      mcq: this.state.mcq.concat(<McqOption />),
    });
  };

  render() {
    if (this.props.selectValue === 1) {
      return <ShortAnswer />;
    } else if (this.props.selectValue === 2) {
      return (
        <Checkboxes
          arr={this.state.checkbox}
          appendCheckbox={this.appendCheckboxes}
        />
      );
    } else if (this.props.selectValue === 3) {
      return <Mcq arr={this.state.mcq} appendCheckbox={this.appendMcq} />;
    } else {
      return null;
    }
  }
}

export default AnswerFields;
