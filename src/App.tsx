import React, { Fragment } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
