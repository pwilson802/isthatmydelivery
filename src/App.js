import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IS THAT MY DELIVERY?</h1>
        <div className="wrapper">
          <Carousel showThumbs={false} showStatus={false} dynamicHeight={true} autoPlay={false} showIndicators={false }>
                <div className="page">
                    <img src="./assets/gorrilla.png" />
                </div>
                <div className="page">
                    <img src="./assets/gorrilla-red.png" />
                </div>
                <div className="page">
                    <img src="./assets/gorrilla-blue.png" />
            </div>
                            <div className="page">
                    <img src="./assets/gorrilla-bone.png" />
            </div>
                            <div className="page">
                    <img src="./assets/gorrilla-gold.png" />
            </div>
            <div className="page">
                    <img src="./assets/gorrilla-photocopy.png" />
            </div>
                        <div className="page">
                    <img src="./assets/rabbit.png" />
            </div>
                                    <div className="page">
                    <img src="./assets/rabbit-red.png" />
            </div>
                                    <div className="page">
                    <img src="./assets/rabbit-blue.png" />
            </div>
                                    <div className="page">
                    <img src="./assets/rabbit-gold.png" />
                </div>
                                    <div className="page">
                    <img src="./assets/rabbit-red.png" />
            </div>
                                    <div className="page">
                    <img src="./assets/rabbit-photocopy.png" />
                </div>
          </Carousel>
                </div>
      </header>
    </div>
  );
}

export default App;
