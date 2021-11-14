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

const getActiveRule = (hash: string) => (location: any) =>
  location.hash.startsWith(hash);

// 是否 production 环境
const isEnvProd = import.meta.env.PROD;
const prodEntryPrefix = '//frontend-trainee.github.io';

registerMicroApps([
  {
    name: 'viteApp', // app name registered
    entry:
      (isEnvProd ? prodEntryPrefix : '//localhost:3000') + '/react-app-child',
    container: '#container',
    activeRule: getActiveRule('#/app-react'),
  },
  // {
  //   name: 'vueApp',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#container',
  //   activeRule: '/app-2',
  // },
]);

start();
