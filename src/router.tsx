import { lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';

const LoginPage = lazy(() => import('./modules/pages/auth/loginPage/index'));
const SignUpPage = lazy(() => import('./modules/pages/auth/signup/index'));
const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const ForgotPasswordPage = lazy(
  () => import('./modules/pages/auth/forgetPassword/index')
);
const FAQPage = lazy(() => import('./modules/pages/faq/index'));

const routes: RouteObject[] = [
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: '/login',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/sign_up',
        element: (
          <SignUpPage
            faculty={''}
            department={''}
            regno={''}
            session={''}
            program={''}
            password={''}
          />
        ),
      },
      {
        path: '/notice',
        element: <NoticePage />,
      },
      {
        path: '/forgot_password',
        element: <ForgotPasswordPage result={false} />,
      },
      {
        path: '/result',
        element: <ForgotPasswordPage result={true} />,
      },
      {
        path: '/faq',
        element: <FAQPage />,
      },
    ],
  },
];

export default routes;
