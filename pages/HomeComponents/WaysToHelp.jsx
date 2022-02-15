import React, { useState, useEffect } from "react";
import { Card } from "antd";
import separator from "../assets/separator.png";
import ellipsis from "../assets/ellipsis.png";
import therapist from  "../assets/therapist.jpeg";
import test from  "../assets/test.jpeg";
import publications from  "../assets/publications.jpeg";

const WaysToHelp = () => {
  const [URL, setURL] = useState('')

  const cardStyles = {
    width: 250,
    marginTop: "10px",
    height: 250
    };


    useEffect(() => {
      switch (window.location.hostname) {
        case "localhost" || "127.0.0.2":
          setURL("http://localhost:3000");
          break;
        case "health-associates.herokuapp.com/":
          setURL("https://health-associates.herokuapp.com/");
      }
    }, []);
  




  return (
    <div id="ways-help">
      <h1>Ways We Can Help</h1>
      <img
        src={separator.src}
        className="separator"
        alt="A line icon separating the title from the rest of the text on the page"
      />
      <div id="help-cards">
        <Card style={cardStyles}>
          <a href={`${URL}/services`}>
          <div className="img_wrapper">
            <img
            alt='A photo of a therapist talking to their client, clicking will take you to "services" page '
              src={therapist.src}
              style={{
                height: "248px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
              <br/>
              <p style={{fontSize:' 1.2em'}}>Services</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="orange ellipsis to separate title from text" />
              <p>Each member of our staff has specialized training and experience in various areas of mental health services</p>
            
            </div>
          </div>
          </a>
        </Card>
        <Card style={cardStyles}>
        <a href={`${URL}/services`}>
          <div className="img_wrapper">
            <img
              alt='A photo of two people talking to eachother while looking at an ipad, clicking will take you to "services" page in the testing section'
              src={test.src}
              style={{
                height: "248px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
            <br/>
              <p style={{fontSize:' 1.2em'}}>Testing</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="orange ellipsis to separate title from text" />
              <p>Our staff offers comprehensive psychological testing services to facilitate diagnosis and treatment</p>
            </div>
          </div>
          </a>
        </Card>
        <Card style={cardStyles}>
        <a href={`${URL}/publications`}>
          <div className="img_wrapper">
            <img
              alt='A photo of a coffee mug sitting on two books, clicking will take you to "publications " page '
              src={publications.src}
              style={{
                height: "248px", 
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
            <br/>
              <p style={{fontSize:' 1.2em'}}>Publications</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="orange ellipsis to separate title from text" />
              <p>Health Associates has published Optimum, The Health Associates Newsletter since 1987.</p>
            
            </div>
          </div>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default WaysToHelp;
