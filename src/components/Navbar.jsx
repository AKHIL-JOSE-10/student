import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-secondary py-3">
      <Nav className="justify-content-evenly">
        <Nav.Item>
          <Link to="/home" className="btn btn-outline-light">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/form" className="btn btn-outline-light">
            Employee Form
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="btn btn-outline-light">
            About Us
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
