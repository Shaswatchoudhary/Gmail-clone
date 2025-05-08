import { lazy } from 'react';
const Main = lazy(() => import("../pages/main"));
const Emails = lazy(() => import("../component/Emails"));
const ViewEmail = lazy(() => import("../component/ViewEmail"));
const routes = {
  main: { path: "/", element: Main },
  emails: { path: "emails", element: Emails },
  view: { path: "view", element: ViewEmail },
  invalid: { path: "*", element: Emails }
};
export { routes };