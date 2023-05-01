import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ContractForm = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          label="Field 1"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <TextField
          label="Field 2"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        {/* Add more form fields as needed */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Generate Contract
        </Button>
      </form>
    </Container>
  );
};

export default ContractForm;
