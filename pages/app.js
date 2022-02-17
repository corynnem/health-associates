import React, { useEffect, useState } from "react";
import background from "../pages/assets/background.jpg";
import Doctors from "./HomeComponents/doctors";
import WaysToHelp from "./HomeComponents/WaysToHelp";
import separator from "./assets/separator.png";
import Footer from "./ResusableComponents/Footer";
import carousel1 from './assets/carousel/carousel1.jpg'
import carousel2 from './assets/carousel/carousel2.jpg'
import carousel3 from './assets/carousel/carousel3.jpg'
import carousel4 from './assets/carousel/carousel4.jpg'
import { Carousel } from "antd";

const App = () => {
  const [URL, setURL] = useState('')

  useEffect(() => {
  switch(window.location.hostname) {
    case 'localhost' || '127.0.0.2':
        setURL('http://localhost:3000') 
        break;
    case 'health-associates.herokuapp.com/':
        setURL('https://health-associates.herokuapp.com/');

}
}, [])


  return (
    <div>
      <div id="home">
        <div id="main">
          <img
            id="background"
            src={background.src}
            alt="Photo of body of water"
          />
          <div id="text">
            <h1>Welcome to Health Associates! </h1>
            <p>
              Health Associates is a group of mental health professionals
              dedicated to the well being of our clients. We approach
              psychological health utilizing various treatment methods,
              including individual, family and group counseling, cognitive and
              behavioral methods, biofeedback training, nutritional guidance,
              exercise recommendations, and stress management techniques. Please
              browse this website to learn valuable information about our
              services.
            </p>
            <br/>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <button id='main-button' onClick={() => window.location.assign(`${URL}/services`)}>Services</button>
              <button id='main-button' onClick={() => window.location.assign(`${URL}/contact`)}>Book Now</button>
            </div>
        </div>
            
          </div>
          {/* <br/> */}
  
        <div
          style={{
            marginTop: "10vh",
            textAlign: "center",
            marginBottom: "20vh",
          }}
        >
          {/* <WaysToHelp /> */}
        </div>
        <div>
          {/* <Carousel autoplay style={{width: '100vw', marginLeft: '-32px'}}>
            <div style={{width: '100vw' }} >
            <img id='background' style={{ width: '100vw', marginLeft: '0'}} src={carousel1.src} alt="Someone filling out forms on a clip board"/>
            </div>
            <div>
            <img id="background" src={carousel2.src} style={{ width: '100vw', marginLeft: '0'}} alt="A therapist and client sitting accross from eachother having a discussion with windows in the background"/>
            </div>
            <div>
            <img id="background" src={carousel3.src} style={{ width: '100vw', marginLeft: '0'}} alt="A couple sitting on a couch across from a therapist talking to eachother"/>
            </div>
            <div>
            <img id="background" src={carousel4.src} style={{ width: '100vw', marginLeft: '0'}} alt="A person sitting accross from a therapist with his head in his hands"/>
            </div>
          </Carousel> */}
        </div>
        <div style={{ marginTop: "10vh", textAlign: "center" }}>
          <h1>Providers</h1>
          <img
            src={separator.src}
            className="separator"
            alt="A line icon separating the title from the rest of the text on the page"
          />
          <Doctors />
        </div>
      </div>
      <Footer style={{marginLeft: '-32px'}} />
    </div>
  );
};

export default App;
