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
      (isEnvProd ? prodEntryPrefix : '//localhost:5000') + '/react-app-child',
    container: '#container',
    activeRule: getActiveRule('#/app-react'),
  },
  {
    name: 'vue2App',
    entry: isEnvProd
      ? prodEntryPrefix + '/vue2-child-app/'
      : '//localhost:8080',
    container: '#container',
    activeRule: getActiveRule('#/app-vue2'),
  },
  {
    name: 'vue3App',
    entry: isEnvProd
      ? prodEntryPrefix + '/vue3-child-app/'
      : '//localhost:8081',
    // entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#container',
    activeRule: getActiveRule('#/app-vue3'),
  },
]);

start();
