import { lazy } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaPeopleLine } from 'react-icons/fa6';
import { RiUserSearchFill } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

const DepartmentHomePage = lazy(
  () => import('../modules/pages/department/index')
);
const StudentList = lazy(
  () => import('../modules/pages/department/studentList')
);
const StudentSearch = lazy(
  () => import('../modules/pages/department/studentSearch')
);
const Teachers = lazy(() => import('../modules/pages/department/teachers'));

const DepartmentRoutes = [
  {
    id: 1,
    path: 'home',
    title: 'Home',
    icon: IoHomeOutline,
    component: DepartmentHomePage,
  },
  {
    id: 2,
    path: 'student_list',
    title: 'Student List',
    icon: FaPeopleLine,
    component: StudentList,
  },
  {
    id: 3,
    path: 'student_search',
    title: 'Student Search',
    icon: RiUserSearchFill,
    component: StudentSearch,
  },
  {
    id: 4,
    path: 'teachers',
    title: 'Teachers',
    icon: LiaChalkboardTeacherSolid,
    component: Teachers,
  },
];

export default DepartmentRoutes;
