import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root-0')
);

registerMicroApps([
  {
    name: 'viteApp', // app name registered
    entry: '//mlemoe.github.io/frontend-mentor/',
    container: '#child-container',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'vueApp',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#child-container',
    activeRule: '/yourActiveRule2',
  },
]);

start();
