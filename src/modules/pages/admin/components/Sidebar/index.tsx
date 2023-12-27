import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import AdminRoutes from '../../../../../routes/admin';

const Sidebar = () => {
  const location = useLocation();
  const activeRoute = (routeName) =>
    location.pathname.indexOf(routeName) > -1 ? 'active' : '';

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper" style={{ backgroundColor: '#2F1B72' }}>
        <Nav>
          {AdminRoutes.map((route) => {
            return (
              <li key={route?.id} className={activeRoute(route.path)}>
                <Link className="nav-link" to={route?.path}>
                  <div className="">
                    <span style={{ fontSize: '20px' }}>
                      {route?.icon ? React.createElement(route?.icon) : ''}
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
