import React from 'react';
import { Container, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ContractPreview = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Contract Preview
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Contract details will be displayed here.
        </Typography>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Deploy Contract
      </Button>
    </Container>
  );
};

export default ContractPreview;
