import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CarouselFunction } from "./Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img alt="" src={require("./img/logo.png")} />
        <div className="divLinksHeader">
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
                    <NavDropdown.Item href="#action/3.1">
                      Gabriel Márcio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Marcus Baracho
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Renato Ferreira
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Wictor Lopes
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h1 style={{ paddingLeft: 200 }}>História</h1>
        </div>
      </header>
      <body className="body">
        <p>Aqui contaremos uma história de 4 amigos</p>
        <CarouselFunction />
      </body>
    </div>
  );
}

export default App;
