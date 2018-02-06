import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';
import '@material/theme/dist/mdc.theme.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/layout-grid/dist/mdc.layout-grid.css'
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
  	</Provider>,
  	document.getElementById('root')
);
