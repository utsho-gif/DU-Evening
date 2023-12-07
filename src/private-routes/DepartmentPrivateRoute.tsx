/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
// import { toast } from 'react-toastify';
import DepartmentLayout from '../modules/pages/department/ui/department';

interface IDepartmentPrivateRouteProps {
  permission: string | null;
  loginStateData: any;
  permissions: any;
}

const DepartmentPrivateRoutes: React.FC<IDepartmentPrivateRouteProps> = ({
  permission,
}) => {
  if (permission === null) {
    return (
      <DepartmentLayout>
        <Outlet />
      </DepartmentLayout>
    );
  }
};

function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default memo(DepartmentPrivateRoutes, areEqual);

// export default DepartmentPrivateRoutes;
