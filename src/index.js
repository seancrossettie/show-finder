import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import firebaseConfig from './helpers/apiKeys';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EEE5E9',
    },
    secondary: {
      main: '#D1AC00',
    },
  },
});

ReactDOM.render(
  <React.Fragment>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
