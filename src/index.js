import React from 'react';
import ReactDOM from 'react-dom';
// import 'https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300';
// import 'https://use.fontawesome.com/releases/v5.0.8/css/all.css';
import './css/reset.css';
import './css/styles.css';
import './css/themes/white-grey.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
