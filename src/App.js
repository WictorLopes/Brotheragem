import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CarouselFunction } from "./Carousel";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img alt="" src={require("./img/logo.png")} />
        <div className="divLinksHeader">
          <h1>Quem somos</h1>
          <h1 style={{paddingLeft: 200}}>História</h1>
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
