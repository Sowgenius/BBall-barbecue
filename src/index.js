import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
