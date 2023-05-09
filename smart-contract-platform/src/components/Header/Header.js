import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Smart Contracts
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            className={classes.button}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/template"
            className={classes.button}
          >
            Contract Template
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/form"
            className={classes.button}
          >
            Contract Form
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/preview"
            className={classes.button}
          >
            Contract Preview
          </Button>
          <Button // Add this button for Login
            color="inherit"
            component={RouterLink}
            to="/login"
            className={classes.button}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
