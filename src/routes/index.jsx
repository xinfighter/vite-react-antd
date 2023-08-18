import { useRoutes } from 'react-router-dom';

import HomePage from '@/views/Home';
import Index from '@/views/Index';

const router = [
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'home',
        element: <HomePage />
      }
    ]
  }
];

const Routes = () => {
  return useRoutes(router);
};

export default Routes;
