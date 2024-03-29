import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContractTemplate from './components/ContractTemplate/ContractTemplate';
import ContractForm from './components/ContractForm/ContractForm';
import ContractPreview from './components/ContractPreview/ContractPreview';
import LandingPage from './components/LandingPage/LandingPage';
import backgroundImage from './assets/background.jpg';
import { FormDataProvider } from './FormDataContext';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <FormDataProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/template" element={<ContractTemplate />} />
            <Route path="/form" element={<ContractForm />} />
            <Route path="/preview" element={<ContractPreview />} />
          </Routes>
        </FormDataProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
