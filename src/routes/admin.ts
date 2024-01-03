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
import { FaSchoolFlag } from 'react-icons/fa6';

const AdminOverviewPage = lazy(() => import('../modules/pages/admin/index'));
const ExamListPage = lazy(() => import('../modules/pages/admin/examList'));
const StudentSearchPage = lazy(
  () => import('../modules/pages/admin/studentSearch')
);
const SupportMessagePage = lazy(
  () => import('../modules/pages/admin/supportMessage')
);
const DepartmentEditPage = lazy(
  () => import('../modules/pages/admin/allPrograms')
);
const NoticePage = lazy(() => import('../modules/pages/admin/notice'));
const TeacherPage = lazy(() => import('../modules/pages/admin/teacher'));
const DepartmentPage = lazy(() => import('../modules/pages/admin/department'));
const FacultyPage = lazy(() => import('../modules/pages/admin/faculty'));

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
    component: ExamListPage,
  },
  {
    id: 4,
    path: 'support',
    title: 'Support Message',
    icon: LuMessagesSquare,
    component: SupportMessagePage,
  },
  {
    id: 5,
    path: 'faculty',
    title: 'Faculty',
    icon: FaSchoolFlag,
    component: FacultyPage,
  },
  {
    id: 6,
    path: 'department',
    title: 'Department',
    icon: FaUserGraduate,
    component: DepartmentPage,
  },
  {
    id: 7,
    path: 'programs',
    title: 'Programs',
    icon: GiGraduateCap,
    component: DepartmentEditPage,
  },

  {
    id: 8,
    path: 'notice',
    title: 'Notice',
    icon: GoBell,
    component: NoticePage,
  },
  {
    id: 9,
    path: 'teachers',
    title: 'Teachers',
    icon: LiaChalkboardTeacherSolid,
    component: TeacherPage,
  },
];

export default AdminRoutes;
