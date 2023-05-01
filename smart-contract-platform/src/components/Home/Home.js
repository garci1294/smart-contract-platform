import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Smart Contracts Platform
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Create and manage smart contracts for real estate with ease.
        </Typography>
        <div className={classes.heroButtons}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
