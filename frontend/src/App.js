import React, { Suspense, lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { routes } from "./routes/routes";
import SuspenseLoader from './component/common/SuspenseLoader';

const ErrorComponent = lazy(() => import('./component/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.main.path} element={<routes.main.element />}>
      {/* Default route: redirect to inbox */}
      <Route index element={<Navigate to={`${routes.emails.path}/inbox`} />} />

      {/* Emails list with dynamic type */}
      <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />

      {/* View email */}
      <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />

      {/* Catch-all invalid path */}
      <Route path="*" element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
