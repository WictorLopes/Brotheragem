import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselFunction() {
  return (
    <div style={{display: 'block', width: 700, height: 508, padding: 30}}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require('./img/foto1.png')}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require('./img/foto2.png')}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export { CarouselFunction };
