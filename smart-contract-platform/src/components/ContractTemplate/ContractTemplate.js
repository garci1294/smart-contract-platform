import React from 'react';
import { Typography, Container, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
  },
}));

const ContractTemplate = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Contract Template
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Description of the contract template
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContractTemplate;
