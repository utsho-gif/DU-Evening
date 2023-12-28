import { lazy } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaPeopleLine } from 'react-icons/fa6';
import { RiUserSearchFill } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { IconType } from 'antd/es/notification/interface';

const DepartmentHomePage = lazy(
  () => import('../modules/pages/department/index')
);
const StudentListPage = lazy(
  () => import('../modules/pages/department/studentList')
);
const StudentSearchPage = lazy(
  () => import('../modules/pages/department/studentSearch')
);
const TeachersPage = lazy(() => import('../modules/pages/department/teachers'));
const DepartmentEditPage = lazy(
  () => import('../modules/pages/department/departmentEdit')
);
const ChangePasswordPage = lazy(
  () => import('../modules/pages/department/changePassword')
);

interface IDepartment {
  id: number;
  path: string;
  title: string;
  icon?: IconType;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const DepartmentRoutes: IDepartment[] = [
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
    component: StudentListPage,
  },
  {
    id: 3,
    path: 'student_search',
    title: 'Student Search',
    icon: RiUserSearchFill,
    component: StudentSearchPage,
  },
  {
    id: 4,
    path: 'teachers',
    title: 'Teachers',
    icon: LiaChalkboardTeacherSolid,
    component: TeachersPage,
  },
  {
    id: 5,
    path: 'department_edit',
    title: 'Department Edit',
    component: DepartmentEditPage,
  },
  {
    id: 6,
    path: 'change_password',
    title: 'Change Password',
    component: ChangePasswordPage,
  },
];

export default DepartmentRoutes;
