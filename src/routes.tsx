export interface IDashboardRoute {
  [x: string]: any;
  path: string;
  title: string;
  layout: string;
  key: string;
}

const dashboardRoutes: IDashboardRoute[] = [
  {
    path: '/overview',
    title: 'Overview',
    layout: '/dashboard',
    key: 'overview',
  },
  {
    path: '/faq',
    title: 'Faq',
    layout: '/dashboard',
    key: 'faq',
  },
];

export default dashboardRoutes;
