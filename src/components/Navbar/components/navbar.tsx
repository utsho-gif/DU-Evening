import Nav from 'react-bootstrap/Nav';
import { BiLogIn } from 'react-icons/bi';
import { BsKey } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { PiStudentDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function NavItems() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="navbar-style">
        <Nav
          fill
          variant="tabs"
          defaultActiveKey="/login"
          className="active-style"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/login"
              eventKey="/login"
              className="d-flex align-items-center justify-content-center"
            >
              <BiLogIn /> &nbsp; Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/notice"
              eventKey="/notice"
              className="d-flex align-items-center justify-content-center"
            >
              <HiOutlineDocumentText /> &nbsp; Notice
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/forgot_password"
              eventKey="/forgot_password"
              className="d-flex align-items-center justify-content-center"
            >
              <BsKey /> &nbsp; Forgot Password
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/result"
              eventKey="/result"
              className="d-flex align-items-center justify-content-center"
            >
              <PiStudentDuotone /> &nbsp; Result
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/faq"
              eventKey="/faq"
              className="d-flex align-items-center justify-content-center"
            >
              <FaQuestionCircle /> &nbsp; FAQ
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default NavItems;
