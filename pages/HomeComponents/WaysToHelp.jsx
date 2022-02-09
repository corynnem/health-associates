import React from "react";
import { Card } from "antd";
import separator from "../assets/separator.png";
import ellipsis from "../assets/ellipsis.png";
import therapist from  "../assets/therapist.jpeg";
import test from  "../assets/test.jpeg";
import publications from  "../assets/publications.jpeg";

const WaysToHelp = () => {
  const cardStyles = {
    width: 210,
    marginTop: "10px",
    height: '210px'
  };
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
          <div className="img_wrapper">
            <img
              src={therapist.src}
              style={{
                height: "208px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
              <p style={{fontSize:' 1.2em'}}>Services</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px'}} alt="orange ellipsis to separate title from text" />
              <p>Each member of our staff has specialized training and experience in various areas of mental health services</p>
            
            </div>
          </div>
        </Card>
        <Card style={cardStyles}>
          <div className="img_wrapper">
            <img
              src={test.src}
              style={{
                height: "208px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
              <p style={{fontSize:' 1.2em'}}>Testing</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px'}} alt="orange ellipsis to separate title from text" />
              <p>Our staff offers comprehensive psychological testing services to facilitate diagnosis and treatment</p>
            </div>
          </div>
        </Card>
        <Card style={cardStyles}>
          <div className="img_wrapper">
            <img
              src={publications.src}
              style={{
                height: "208px", 
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
              <p style={{fontSize:' 1.2em'}}>Publications</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px'}} alt="orange ellipsis to separate title from text" />
              <p>Health Associates has published Optimum, The Health Associates Newsletter since 1987.</p>
            
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WaysToHelp;
