import { lazy } from 'react';

const DepartmentHomePage = lazy(
  () => import('../modules/pages/department/index')
);
const StudentList = lazy(
  () => import('../modules/pages/department/studentList')
);

const DepartmentRoutes = [
  {
    id: 1,
    path: 'home',
    title: 'Home',
    component: DepartmentHomePage,
  },
  {
    id: 2,
    path: 'student_list',
    title: 'Student List',
    component: StudentList,
  },
];

export default DepartmentRoutes;
