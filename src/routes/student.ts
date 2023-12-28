import { IconType } from 'antd/es/notification/interface';
import { lazy } from 'react';
import { IoHomeOutline } from 'react-icons/io5';

const StudentHomePage = lazy(() => import('../modules/pages/student/index'));
const StudentEdit = lazy(() => import('../modules/pages/student/studentEdit'));
const ChangePasswordPage = lazy(
  () => import('../modules/pages/student/changePassword')
);

interface IStudent {
  id: number;
  path: string;
  title: string;
  icon?: IconType;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const StudentRoutes: IStudent[] = [
  {
    id: 1,
    path: 'home',
    title: 'Home',
    icon: IoHomeOutline,
    component: StudentHomePage,
  },
  {
    id: 5,
    path: 'edit_profile',
    title: 'Edit Profile',
    component: StudentEdit,
  },
  {
    id: 6,
    path: 'change_password',
    title: 'Change Password',
    component: ChangePasswordPage,
  },
];

export default StudentRoutes;
