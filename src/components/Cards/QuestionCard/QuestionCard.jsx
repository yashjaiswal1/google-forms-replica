import React, { useState } from "react";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Tooltip,
  IconButton,
  Card,
  CardActions,
  CardContent,
  TextField,
  Grid,
  Button,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Switch,
  MenuItem,
} from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import AnswerFields from "../AnswerFields/AnswerFields";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "25vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function QuestionCard() {
  //   Hooks for storing value for the question type < Select/> component
  const [selectVal, setSelectVal] = React.useState("");

  //   Used for deleting a card from display
  const [displayCard, setDisplayCard] = useState({
    display: true,
  });

  const classes = useStyles();
  const handleChange = (event) => {
    setSelectVal(event.target.value);
  };

  if (displayCard.display == true) {
    return (
      <div>
        <Draggable axis="y">
          <Paper elevation={3} style={{ marginTop: "5vh" }}>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={8}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      style={{
                        margin: 8,
                      }}
                      placeholder="Question"
                      fullWidth
                      variant="filled"
                      inputProps={{}}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectVal}
                        onChange={handleChange}
                        label="Age"
                        color="secondary"
                      >
                        <MenuItem value={1}>
                          <ShortTextIcon style={{ color: "#5F6368" }} />
                          &nbsp;Short answer
                        </MenuItem>
                        <MenuItem value={2}>
                          <CheckBoxIcon style={{ color: "#5F6368" }} />
                          &nbsp;Checkboxes
                        </MenuItem>
                        <MenuItem value={3}>
                          <RadioButtonCheckedIcon
                            style={{ color: "#5F6368" }}
                          />
                          &nbsp;Multiple Choice
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    {/* AnswerFields component for rendering the sample input fields (disabled) based on the option selected  */}
                    <AnswerFields selectValue={selectVal} />

                    <hr
                      style={{
                        width: "100%",
                        textAlign: "left",
                        marginLeft: "0",
                      }}
                      color="#D9DCE0"
                    />
                  </Grid>
                </Grid>
                <Grid container style={{ cursor: "move" }}>
                  <Grid item xs={12} align="right">
                    <Tooltip title="Delete">
                      <IconButton
                        style={{ color: "#5F6368", textAlign: "center" }}
                        component="span"
                        onClick={() => {
                          setDisplayCard({
                            display: false,
                          });
                        }}
                      >
                        <DeleteOutlineIcon style={{ color: "#5F6368" }} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Draggable>
      </div>
    );
  } else if (displayCard.display == false) {
    return null;
  }
}
export default QuestionCard;
