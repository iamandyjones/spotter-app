import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@material/theme/dist/mdc.theme.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/layout-grid/dist/mdc.layout-grid.css'
import './index.css';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
