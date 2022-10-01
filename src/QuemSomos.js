import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function QuemSomosFunction() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Quem Somos"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/marcio">Gabriel Márcio</NavDropdown.Item>
              <NavDropdown.Item href="/baracho">
                Marcus Baracho
              </NavDropdown.Item>
              <NavDropdown.Item href="/kovah">Renato Ferreira</NavDropdown.Item>
              <NavDropdown.Item href="/wictor">Wictor Lopes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export { QuemSomosFunction };
