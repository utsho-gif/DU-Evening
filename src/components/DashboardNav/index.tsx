import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { PiPasswordDuotone } from 'react-icons/pi';

import DepartmentRoutes from '../../routes/department';

const DashboardNav = () => {
  const location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < DepartmentRoutes.length; i++) {
      if (location.pathname.indexOf(DepartmentRoutes[i].path) !== -1) {
        return DepartmentRoutes[i].title;
      }
    }
    return 'Dashboard';
  };

  const mobileSidebarToggle = (e: React.MouseEvent): void => {
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');

    const node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = function () {
      const element = this as HTMLElement;
      if (element.parentElement) {
        element.parentElement.removeChild(element);
        document.documentElement.classList.toggle('nav-open');
      }
    };

    document.body.appendChild(node);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand className="mr-2">{getBrandText()}</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex align-items-center justify-content-end"
        >
          <Nav className="ml-auto" navbar>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <div className="d-flex align-items-center justify-content-center">
                  Department Name
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  className="d-flex align-items-center justify-content-around"
                  to={'/department/department_edit'}
                >
                  <FaRegEdit />
                  &nbsp; Department Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to={'/department/change_password'}
                  className="d-flex align-items-center justify-content-around"
                >
                  <PiPasswordDuotone />
                  &nbsp; Change Password
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link className="m-0" href="#home">
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardNav;
