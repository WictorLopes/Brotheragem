import "./App.css";
import React from "react";
import { ImageBackground, View } from "react-native";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
        <View>
          <ImageBackground
            source={require("./imgs/foto1.png")}
            style={{ width: 400, height: 400 }}
          ></ImageBackground>
        </View>
      </body>
    </div>
  );
}

export default App;
