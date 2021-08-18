import { lazy } from 'react';

const NotFound = lazy(() => import('pages/NotFound'));

const common = [
  {
    path: '*',
    component: NotFound,
    exact: false
  }
];

export default common;
