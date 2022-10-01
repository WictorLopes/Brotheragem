import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Marcio from "./QuemSomosPaginas/marcio";
import Baracho from "./QuemSomosPaginas/baracho";
import Kovah from "./QuemSomosPaginas/kovah";
import Wictor from "./QuemSomosPaginas/wictor";

export default function QuemSomosFunction() {
  return (
    <Router>
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
                <NavDropdown.Item as={Link} to="/marcio">
                  Gabriel Márcio
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/baracho">
                  Marcus Baracho
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kovah">
                  Renato Ferreira
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wictor">
                  Wictor Lopes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/marcio" element={<Marcio />} />
        <Route path="/baracho" element={<Baracho />} />
        <Route path="/kovah" element={<Kovah />} />
        <Route path="/wictor" element={<Wictor />} />
      </Routes>
    </Router>
  );
}
export { QuemSomosFunction };
