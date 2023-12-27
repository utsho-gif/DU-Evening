import { lazy } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { FaPeopleLine } from 'react-icons/fa6';
import { RiUserSearchFill } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

const AdminOverviewPage = lazy(() => import('../modules/pages/admin/index'));
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

const AdminRoutes = [
  {
    id: 1,
    path: 'overview',
    title: 'Overview',
    icon: IoHomeOutline,
    component: AdminOverviewPage,
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

export default AdminRoutes;
