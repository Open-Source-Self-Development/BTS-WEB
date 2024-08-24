import React, { memo, useMemo, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import SuspenseLoading from '../shared/SuspenseLoading';
import appConfig from '../../configs/app.config';

const Layout = () => {
  const AppLayout = useMemo(() => {
    return lazy(() => import('./AppLayout'));
  }, []);

  const AuthLayout = useMemo(() => {
    return lazy(() => import('./AuthLayout'));
  });

  const location = useLocation();
  return (
    <>
      <Suspense
        fallback={
          <SuspenseLoading/>
        }>
        {location?.pathname==appConfig.signPath ? <AuthLayout /> : <AppLayout/>}
      </Suspense>
    </>
  );
};

export default memo(Layout);
