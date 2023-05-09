import React from 'react';
import {
  Container,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Switch,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFormData } from '../../FormDataContext';


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

const validationSchema = Yup.object({
  propertyAddress: Yup.string().required('Property Address is required'),
  price: Yup.number().positive('Price must be a positive number').required('Price is required'),
  buyer: Yup.string().required('Buyer is required'),
  seller: Yup.string().required('Seller is required'),
  offerDetails: Yup.string().required('Offer Details are required'),
  acceptanceDetails: Yup.string().required('Acceptance Details are required'),
  considerationDetails: Yup.string().required('Consideration Details are required'),
  //mutualAgreement: Yup.boolean().oneOf([true], 'Mutual Agreement is required'),
  additionalTerms: Yup.string().optional(),
  governingLaw: Yup.string().required('Governing Law is required'),
  disputeResolution: Yup.string().required('Dispute Resolution is required'),
  closingDate: Yup.date().required('Closing Date is required'),
  agentCommission: Yup.number().positive('Agent Commission must be a positive number').required('Agent Commission is required'),
  buyerWallet: Yup.string().required('Buyer Wallet Address is required'),
  sellerWallet: Yup.string().required('Seller Wallet Address is required'),
});

const ContractForm = () => {
  const { setFormData } = useFormData();

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      propertyAddress: '',
      price: '',
      buyer: '',
      seller: '',
      offerDetails: '',
      acceptanceDetails: '',
      considerationDetails: '',
      //mutualAgreement: false,
      additionalTerms: '',
      governingLaw: '',
      disputeResolution: '',
      closingDate: '',
      agentCommission: '',
      buyerWallet: '',
      sellerWallet: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setFormData(values);
    },
  });

  return (
    <Container className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit} noValidate autoComplete="off">
        {/* ...existing form elements */}
        {/* Property Address */}
        <TextField
          label="Property Address"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="propertyAddress"
          value={formik.values.propertyAddress}
          onChange={formik.handleChange}
          error={formik.touched.propertyAddress && Boolean(formik.errors.propertyAddress)}
          helperText={formik.touched.propertyAddress && formik.errors.propertyAddress}
        />
        {/* Price */}
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        {/* Buyer */}
        <TextField
          label="Buyer"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="buyer"
          value={formik.values.buyer}
          onChange={formik.handleChange}
          error={formik.touched.buyer && Boolean(formik.errors.buyer)}
          helperText={formik.touched.buyer && formik.errors.buyer}
        />
        {/* Seller */}
        <TextField
          label="Seller"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="seller"
          value={formik.values.seller}
          onChange={formik.handleChange}
          error={formik.touched.seller && Boolean(formik.errors.seller)}
          helperText={formik.touched.seller && formik.errors.seller}
        />
        {/* Offer Details */}
        <TextField
          label="Offer Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          name="offerDetails"
          value={formik.values.offerDetails}
          onChange={formik.handleChange}
          error={formik.touched.offerDetails && Boolean(formik.errors.offerDetails)}
          helperText={formik.touched.offerDetails && formik.errors.offerDetails}
        />
        {/* Acceptance Details */}
        <TextField
          label="Acceptance Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          name="acceptanceDetails"
          value={formik.values.acceptanceDetails}
          onChange={formik.handleChange}
          error={formik.touched.acceptanceDetails && Boolean(formik.errors.acceptanceDetails)}
          helperText={formik.touched.acceptanceDetails && formik.errors.acceptanceDetails}
        />
        {/* Consideration Details */}
        <TextField
          label="Consideration Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          name="considerationDetails"
          value={formik.values.considerationDetails}
          onChange={formik.handleChange}
          error={formik.touched.considerationDetails && Boolean(formik.errors.considerationDetails)}
          helperText={formik.touched.considerationDetails && formik.errors.considerationDetails}
        />
        {/* Additional Terms */}
        <TextField
          label="Additional Terms"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          name="additionalTerms"
          value={formik.values.additionalTerms}
          onChange={formik.handleChange}
          error={formik.touched.additionalTerms && Boolean(formik.errors.additionalTerms)}
          helperText={formik.touched.additionalTerms && formik.errors.additionalTerms}
        />
        {/* Governing Law */}
        <TextField
          label="Governing Law"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="governingLaw"
          value={formik.values.governingLaw}
          onChange={formik.handleChange}
          error={formik.touched.governingLaw && Boolean(formik.errors.governingLaw)}
          helperText={formik.touched.governingLaw && formik.errors.governingLaw}
        />
        {/* Dispute Resolution */}
        <TextField
          label="Dispute Resolution"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          name="disputeResolution"
          value={formik.values.disputeResolution}
          onChange={formik.handleChange}
          error={formik.touched.disputeResolution && Boolean(formik.errors.disputeResolution)}
          helperText={formik.touched.disputeResolution && formik.errors.disputeResolution}
        />
        {/* Closing Date */}
        <TextField
          label="Closing Date"
          type="date"
          variant="outlined"
          fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          name="closingDate"
          value={formik.values.closingDate}
          onChange={formik.handleChange}
          error={formik.touched.closingDate && Boolean(formik.errors.closingDate)}
          helperText={formik.touched.closingDate && formik.errors.closingDate}
        />
        {/* Agent Commission */}
        <TextField
          label="Agent Commission (%)"
          type="number"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="agentCommission"
          value={formik.values.agentCommission}
          onChange={formik.handleChange}
          error={formik.touched.agentCommission && Boolean(formik.errors.agentCommission)}
          helperText={formik.touched.agentCommission && formik.errors.agentCommission}
        /> 
        <TextField
          label="Buyer Wallet Address"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="buyerWallet"
          value={formik.values.buyerWallet}
          onChange={formik.handleChange}
          error={formik.touched.buyerWallet && Boolean(formik.errors.buyerWallet)}
          helperText={formik.touched.buyerWallet && formik.errors.buyerWallet}
        />

        <TextField
          label="Seller Wallet Address"
          variant="outlined"
          fullWidth
          className={classes.textField}
          name="sellerWallet"
          value={formik.values.sellerWallet}
          onChange={formik.handleChange}
          error={formik.touched.sellerWallet && Boolean(formik.errors.sellerWallet)}
          helperText={formik.touched.sellerWallet && formik.errors.sellerWallet}
        />
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
