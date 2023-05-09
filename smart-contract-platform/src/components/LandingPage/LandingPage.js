import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h2" component="h1" className={classes.title}>
          Welcome to Smart Contracts App
        </Typography>
        <Typography variant="h5" component="p">
          Create and preview smart contracts with ease
        </Typography>
      </Container>
    </Box>
  );
};

export default LandingPage;
