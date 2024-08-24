import React from 'react';
import { TEST_ROLE } from '../../constants/roles.constant';

const protectedRoute = [

  {
    key: 'protect',
    path: `/protect`,
    component: React.lazy(() => import('@/views/protect')),
    authority:[TEST_ROLE]
  },

  
  
 

];

export default protectedRoute;
