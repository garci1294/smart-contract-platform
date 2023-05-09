import React from 'react';
import { Container, Paper, Typography, makeStyles, Grid } from '@material-ui/core';
import {
  Home as HomeIcon,
  AttachMoney as AttachMoneyIcon,
  AccountCircle as AccountCircleIcon,
  Description as DescriptionIcon,
  Gavel as GavelIcon,
  DateRange as DateRangeIcon,
  Business as BusinessIcon,
} from '@material-ui/icons';
import { useFormData } from '../../FormDataContext';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const ContractPreview = () => {
  const classes = useStyles();

  const { formData } = useFormData();

  // Retrieve the contract data from your state or context
  // For demonstration purposes, we'll use hardcoded data
  const contractData = {
    propertyAddress: '123 Main St, San Francisco, CA',
    price: '500,000',
    buyer: 'John Doe',
    seller: 'Jane Smith',
    offerDetails: 'The buyer agrees to pay the seller...',
    acceptanceDetails: 'The seller accepts the offer...',
    considerationDetails: 'The buyer will pay the seller...',
    mutualAgreement: true,
    additionalTerms: 'No additional terms.',
    governingLaw: 'California',
    disputeResolution: 'Arbitration',
    closingDate: 'June 1, 2023',
    agentCommission: '2.5%',
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.title}>
          Contract Preview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <HomeIcon className={classes.icon} />
            <Typography variant="body1">Property Address: {formData.propertyAddress}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AttachMoneyIcon className={classes.icon} />
            <Typography variant="body1">Price: {formData.price}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AccountCircleIcon className={classes.icon} />
            <Typography variant="body1">Buyer: {formData.buyer}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AccountCircleIcon className={classes.icon} />
            <Typography variant="body1">Seller: {formData.seller}</Typography>
          </Grid>
          {/* Add more grid items for the remaining contract fields */}
          
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContractPreview;

