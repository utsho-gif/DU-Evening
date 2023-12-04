import { lazy } from 'react';

const NoticePage = lazy(() => import('./modules/pages/Notice/index'));
const FAQPage = lazy(() => import('./modules/pages/faq/index'));

export interface IDashboardRoute {
  [x: string]: any;
  path: string;
  title: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  layout: string;
  key: string;
}

const dashboardRoutes: IDashboardRoute[] = [
  {
    path: '/notice',
    title: 'Notice',
    element: NoticePage,
    layout: '/dashboard',
    key: 'notice',
  },
  {
    path: '/faq',
    title: 'Faq',
    element: FAQPage,
    layout: '/dashboard',
    key: 'faq',
  },
];

export default dashboardRoutes;
