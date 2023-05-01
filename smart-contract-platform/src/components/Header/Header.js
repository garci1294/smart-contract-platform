import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Smart Contracts App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Templates</Button>
          <Button color="inherit">Create Contract</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
