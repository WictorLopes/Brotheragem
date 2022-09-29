import "./App.css";
import React from "react";
// import { ImageBackground, View } from "react-native";
import { CarouselFunction } from "./Carousel";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Brotheragem</h1>
        <h1>Quem somos</h1>
        <h1>História</h1>
      </header>
      <body className="body">
        <p>Aqui contaremos uma história de 4 amigos</p>
        <CarouselFunction />
      </body>
    </div>
  );
}

export default App;
