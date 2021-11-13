// import loadable from '@loadable/component';
// import { RouteConfig } from 'react-router-config';
import { Router } from 'react-router';
import { Home } from '@/pages/home';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
];

export default routesConfig;
