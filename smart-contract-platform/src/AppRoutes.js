import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ContractForm from './components/ContractForm/ContractForm';
import ContractTemplate from './components/ContractTemplate/ContractTemplate';
import ContractPreview from './components/ContractPreview/ContractPreview';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/template" component={ContractTemplate} />
      <Route path="/form" component={ContractForm} />
      <Route path="/preview" component={ContractPreview} />
    </Switch>
  );
};

export default AppRoutes;
