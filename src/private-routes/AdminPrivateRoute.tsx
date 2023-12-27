/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from '../layouts/admin/ui/Admin';
// import { toast } from 'react-toastify';

interface IAdminPrivateRouteProps {
  permission: string | null;
  loginStateData: any;
  permissions: any;
}

const AdminPrivateRoutes: React.FC<IAdminPrivateRouteProps> = ({
  permission,
}) => {
  if (permission === null) {
    return (
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    );
  }
};

function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default memo(AdminPrivateRoutes, areEqual);

// export default AdminPrivateRoutes;
