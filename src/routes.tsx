import { lazy } from 'react';

const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const FAQPage = lazy(() => import('./modules/pages/faq/index'));

const dashboardRoutes = [
  {
    path: '/overview',
    title: 'Overview',
    element: NoticePage,
    layout: '/dashboard',
  },
  {
    path: '/overview',
    title: 'Overview',
    element: FAQPage,
    layout: '/dashboard',
  },
];

export default dashboardRoutes;
