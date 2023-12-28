import { IconType } from 'antd/es/notification/interface';
import React, { lazy } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { GoBell } from 'react-icons/go';
import { GrOverview } from 'react-icons/gr';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { LuMessagesSquare } from 'react-icons/lu';
import { PiPencilLineDuotone } from 'react-icons/pi';
import { RiUserSearchFill } from 'react-icons/ri';

const AdminOverviewPage = lazy(() => import('../modules/pages/admin/index'));
const StudentListPage = lazy(
  () => import('../modules/pages/department/studentList')
);
const StudentSearchPage = lazy(
  () => import('../modules/pages/admin/studentSearch')
);
const TeachersPage = lazy(() => import('../modules/pages/department/teachers'));
const DepartmentEditPage = lazy(
  () => import('../modules/pages/department/departmentEdit')
);
const ChangePasswordPage = lazy(
  () => import('../modules/pages/department/changePassword')
);

interface IAdmin {
  id: number;
  path: string;
  title: string;
  icon: IconType;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const AdminRoutes: IAdmin[] = [
  {
    id: 1,
    path: 'overview',
    title: 'Overview',
    icon: GrOverview,
    component: AdminOverviewPage,
  },
  {
    id: 2,
    path: 'student_search',
    title: 'Student Search',
    icon: RiUserSearchFill,
    component: StudentSearchPage,
  },
  {
    id: 3,
    path: 'exam',
    title: 'Exam',
    icon: PiPencilLineDuotone,
    component: StudentListPage,
  },
  {
    id: 4,
    path: 'support',
    title: 'Support Message',
    icon: LuMessagesSquare,
    component: TeachersPage,
  },
  {
    id: 5,
    path: 'programs',
    title: 'All Programs',
    icon: GiGraduateCap,
    component: DepartmentEditPage,
  },
  {
    id: 6,
    path: 'department',
    title: 'Department',
    icon: FaUserGraduate,
    component: ChangePasswordPage,
  },
  {
    id: 7,
    path: 'notice',
    title: 'Notice',
    icon: GoBell,
    component: ChangePasswordPage,
  },
  {
    id: 8,
    path: 'teachers',
    title: 'Teachers',
    icon: LiaChalkboardTeacherSolid,
    component: ChangePasswordPage,
  },
];

export default AdminRoutes;
