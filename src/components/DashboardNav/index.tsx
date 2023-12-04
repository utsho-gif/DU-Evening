import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { IoPlanetSharp } from 'react-icons/io5';
import { FcSearch } from 'react-icons/fc';

import dashboardRoutes from '../../routes';
import { useLocation } from 'react-router-dom';

const DashboardNav = () => {
  const location = useLocation();
  const getBrandText = () => {
    for (let i = 0; i < dashboardRoutes.length; i++) {
      if (
        location.pathname.indexOf(
          dashboardRoutes[i].layout + dashboardRoutes[i].path
        ) !== -1
      ) {
        return dashboardRoutes[i].title;
      }
    }
    return 'Dashboard';
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex align-items-center justify-content-between">
            <Nav className="nav mr-auto" navbar>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  data-toggle="dropdown"
                  id="dropdown-67443507"
                  variant="default"
                  className="m-0"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <IoPlanetSharp style={{ fontSize: '28px' }} />
                    <span className="notification">5</span>
                    <span className="d-lg-none ml-1">Notification</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification 1
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <FcSearch style={{ fontSize: '20px' }} />
                    <span className="d-lg-block">Search</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="no-icon">Account</span>
                </Nav.Link>
              </Nav.Item>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  as={Nav.Link}
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  variant="default"
                  className="m-0"
                >
                  <span className="no-icon">Dropdown</span>
                </Dropdown.Toggle>
                <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="no-icon">Log out</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardNav;
