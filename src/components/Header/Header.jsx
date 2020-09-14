import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Button,
  Typography,
  Hidden,
  IconButton,
  Tooltip,
  Fab,
  Zoom,
  Toolbar,
  Grid,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FolderIcon from "@material-ui/icons/FolderOpen";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormTitleCard from "../Cards/TitleCard/TitleCard";
import QuestionCard from "../Cards/QuestionCard/QuestionCard";
import StarIcon from "@material-ui/icons/Star";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const ActionButtonStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabpanel: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderColor: "black",
    },
  },
});

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#4F5052",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}))(Tooltip);

// For the 2 tabs: QUESTIONS and RESPONSES
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Header() {
  const [value, setValue] = React.useState(0);

  // Implemented Hooks to maintain state for the total Question Cards added
  // cardList is an array for storing <QuestionCard /> components
  // This array is used for displaying all the Question Cards
  const [cardList, setCardList] = React.useState({
    cards: [],
  });

  const addCard = () => {
    setCardList({
      cards: cardList.cards.concat(<QuestionCard />),
    });
  };

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ color: "black", backgroundColor: "white" }}
      >
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item>
              <Tooltip title="Forms Home" TransitionComponent={Zoom}>
                <IconButton style={{ color: "#5F6368" }} component="span">
                  <img
                    src={require("../../assets/google-forms.svg")}
                    height="25vw"
                  />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={3}>
              <TextField
                style={{ margin: 8 }}
                placeholder="Untitled Form"
                fullWidth
                margin="normal"
                color="secondary"
                InputProps={{ classes }}
                inputProps={{ style: { fontSize: "1.5vw" } }}
              />
            </Grid>
            <Grid item>
              <Tooltip title="Move to folder" TransitionComponent={Zoom}>
                <IconButton style={{ color: "#5F6368" }} component="span">
                  <FolderIcon style={{ color: "#5F6368" }} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Star" TransitionComponent={Zoom}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<StarBorderOutlinedIcon />}
                      checkedIcon={<StarIcon />}
                      style={{ paddingTop: "12px", color: "#5F6368" }}
                    />
                  }
                />
              </Tooltip>
            </Grid>

            <Hidden smDown>
              <Grid item>
                <Tooltip
                  title="Every change you make is automatically saved in Drive."
                  TransitionComponent={Zoom}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    <br />
                    <i>&nbsp;&nbsp;&nbsp; All changes saved in Drive</i>
                  </Typography>
                </Tooltip>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={3}>
                <TextField
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  disabled
                  color="secondary"
                  InputProps={{ classes }}
                />
              </Grid>
            </Hidden>
            <Grid item justify="flex-end">
              <Tooltip title="Customize Theme" TransitionComponent={Zoom}>
                <IconButton style={{ color: "#5F6368" }} component="span">
                  <PaletteOutlinedIcon style={{ color: "#5F6368" }} />
                </IconButton>
              </Tooltip>
            </Grid>

            <Hidden smDown>
              <Grid item justify="flex-end">
                <Tooltip title="Preview" TransitionComponent={Zoom}>
                  <IconButton style={{ color: "#5F6368" }} component="span">
                    <VisibilityOutlinedIcon style={{ color: "#5F6368" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid item justify="flex-end">
                <Tooltip title="Settings" TransitionComponent={Zoom}>
                  <IconButton style={{ color: "#5F6368" }} component="span">
                    <SettingsIcon style={{ color: "#5F6368" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Hidden>
            <Grid item align="right">
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: purple[700],
                  color: "white",
                }}
              >
                Send
              </Button>
            </Grid>
            <Grid item align="right">
              <Tooltip title="More">
                <IconButton style={{ color: "#5F6368" }} component="span">
                  <MoreVertIcon style={{ color: "#5F6368" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Hidden smDown>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Google Account</Typography>
                  <p style={{ color: "#BDC1C6" }}>
                    {"Yash Jaiswal"}
                    <br />
                    {"abc@example.com"}
                  </p>
                </React.Fragment>
              }
            >
              <IconButton style={{ color: "#5F6368" }} component="span">
                <AccountCircleIcon
                  style={{ color: "#5F6368", fontSize: "3vw" }}
                />
              </IconButton>
            </HtmlTooltip>
          </Hidden>
        </Toolbar>
        <Box m="auto">
          {/* Tabs for QUESTIONS and RESPONSES */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Questions" />
            <Tab label="Responses" />
          </Tabs>
        </Box>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "3vh" }}>
        <Grid item xs={12} sm={10} md={8}>
          {/* Question tab contents */}
          <TabPanel value={value} index={0} className={classes.tabpanel}>
            {/* Form Title (or opening card) component consisting of a Title and a Description text field*/}
            <FormTitleCard />

            {/* Cards defined for rendering questions */}
            <QuestionCard />

            {/* Displays all Question Cards by calling Hooks as mentioned earlier */}

            {cardList.cards}
          </TabPanel>
        </Grid>
      </Grid>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      {/* Floating Action Button (FAB) */}
      <Fab color="secondary" style={ActionButtonStyle} onClick={addCard}>
        <AddRoundedIcon />
      </Fab>
    </div>
  );
}

export default Header;
