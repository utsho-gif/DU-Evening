import { Nav } from 'react-bootstrap';
// import dashboardRoutes, { IDashboardRoute } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import DepartmentRoutes from '../../routes/department';

const Sidebar = () => {
  const location = useLocation();
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? 'active' : '';

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper" style={{ backgroundColor: '#4E4E4E' }}>
        <Nav>
          {DepartmentRoutes.map((route) => {
            return (
              <li key={route?.id} className={activeRoute(route.path)}>
                <Link className="nav-link" to={route?.path}>
                  {route?.title}
                </Link>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
