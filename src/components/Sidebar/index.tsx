import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import DepartmentRoutes from '../../routes/department';
import React from 'react';

const Sidebar = () => {
  const location = useLocation();
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? 'active' : '';

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper" style={{ backgroundColor: '#2F1B72' }}>
        <Nav>
          {DepartmentRoutes.map((route) => {
            return (
              <li key={route?.id} className={activeRoute(route.path)}>
                <Link className="nav-link" to={route?.path}>
                  <div className="">
                    <span style={{ fontSize: '20px' }}>
                      {React.createElement(route?.icon)}
                    </span>
                    &nbsp;
                    {route?.title}
                  </div>
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
