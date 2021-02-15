import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Route from './components/Route';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Route />
      <Footer />
    </Fragment>
  );
}

export default App;
