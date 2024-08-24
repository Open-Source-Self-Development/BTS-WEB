import React from "react";

const publicRoute = [
  {
    key: "home",
    path: `/home`,
    component: React.lazy(() => import("@/views/home")),
  },
  {
    key: "start",
    path: `/start`,
    component: React.lazy(() => import("@/views/start")),
  },
  {
    key: "not-found",
    path: `/not-found`,
    component: React.lazy(() => import("@/views/not-found")),
  },
  {
    key: "sign-in",
    path: `/sign-in`,
    component: React.lazy(() => import("@/views/sign-in")),
  },
];

export default publicRoute;
