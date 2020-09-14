import React from "react";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Card,
  CardActions,
  CardContent,
  TextField,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
  },
});

function FormTitleCard() {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{ marginTop: "20vh" }}>
      <Card style={{ borderTop: "15px solid #F50157" }} variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                style={{
                  margin: 8,
                }}
                inputProps={{ style: { fontSize: "4vw" } }}
                InputProps={{ classes }}
                placeholder="Form Title"
                fullWidth
                margin="normal"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{
                  margin: 8,
                }}
                inputProps={{ style: { fontSize: "1rem" } }}
                InputProps={{ classes }}
                placeholder="Form Description"
                fullWidth
                margin="normal"
                color="secondary"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default FormTitleCard;
