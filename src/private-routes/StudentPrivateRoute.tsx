/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import StudentLayout from '../layouts/Student/ui/Student';

interface IStudentPrivateRouteProps {
  permission: string | null;
  loginStateData: any;
  permissions: any;
}

const StudentPrivateRoutes: React.FC<IStudentPrivateRouteProps> = ({
  permission,
}) => {
  if (permission === null) {
    return (
      <StudentLayout>
        <Outlet />
      </StudentLayout>
    );
  }
};

function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default memo(StudentPrivateRoutes, areEqual);
