import AppRoute from "@/components/route/AppRoute";
import PublicRoute from "@/components/route/PublicRoute";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "@/configs/routes.config";
import ProtectedRoute from "@/components/route/ProtectedRoute";
import AuthorityGuard from "@/components/route/AuthorityGuard";
import { useSelector } from "react-redux";
import appConfig from "@/configs/app.config";
import PageContainer from "@/components/shared/PageContainer";
import { Toaster } from "react-hot-toast";
import SuspenseLoading from "@/components/shared/SuspenseLoading";
const AllRoutes = (props) => {
  const userAuthority = useSelector((state) => state.auth.authority.role);
  return (
    <Routes>
      {/* Protected */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Navigate replace to={appConfig.authenticatedEntryPath} />}
        />
        {protectedRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AuthorityGuard
                route={route}
                userAuthority={userAuthority}
                authority={route.authority}
              >
                <PageContainer>
                  <AppRoute
                    routeKey={route.key}
                    component={route.component}
                    {...route.meta}
                  />
                </PageContainer>
              </AuthorityGuard>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>

      {/* Public */}
      <Route path="/" element={<PublicRoute />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <AppRoute
                routeKey={route.key}
                component={route.component}
                {...route?.meta}
              />
            }
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

const Views = (props) => {
  return (
    <>
      <Suspense fallback={<SuspenseLoading />}>
        <AllRoutes {...props} />
      </Suspense>
      <Toaster position="top-center" />
    </>
  );
};

export default Views;
