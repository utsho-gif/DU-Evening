import { Nav } from 'react-bootstrap';
import dashboardRoutes, { IDashboardRoute } from '../../routes';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? 'active' : '';

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper" style={{ backgroundColor: '#4E4E4E' }}>
        <Nav>
          {dashboardRoutes.map((route: IDashboardRoute) => {
            if (!route?.redirect) {
              return (
                <li
                  key={route?.key}
                  className={activeRoute(route.layout + route.path)}
                >
                  <Link className="nav-link" to={route?.layout + route?.path}>
                    {route?.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
