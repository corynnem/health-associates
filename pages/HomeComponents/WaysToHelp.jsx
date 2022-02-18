import React, { useState, useEffect } from "react";
import { Card } from "antd";
import ellipsis from "../assets/ellipsis.png";
import telehealth from  "../assets/telehealth.jpg";
import onlinePay from  "../assets/online-pay.jpg";
import faq from  "../assets/faq.jpg";

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
 
      <div id="help-cards">
        <Card style={cardStyles}>
          <a href={`${URL}/services`}>
          <div className="img_wrapper">
            <img
            alt='A photo of a telehealth talking to their client, clicking will take you to "services" page '
              src={telehealth.src}
              style={{
                height: "248px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
              <br/>
              <p style={{fontSize:' 1.2em'}}>Telehealth Check-In</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="white ellipsis to separate title from text" />
              <p>Here you can find the links to check in to your telehealth appointments, or see which doctors offer telehealth.</p>
            
            </div>
          </div>
          </a>
        </Card>
        <Card style={cardStyles}>
        <a href={`${URL}/services`}>
          <div className="img_wrapper">
            <img
              alt='A photo of two people talking to eachother while looking at an ipad, clicking will take you to "services" page in the onlinePaying section'
              src={onlinePay.src}
              style={{
                height: "248px",
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
            <br/>
              <p style={{fontSize:' 1.2em'}}>Online Bill Pay</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="orange ellipsis to separate title from text" />
              <p>Online Bill Pay coming soon!</p>
            </div>
          </div>
          </a>
        </Card>
        <Card style={cardStyles}>
        <a href={`${URL}/publications`}>
          <div className="img_wrapper">
            <img
              alt='A photo of a coffee mug sitting on two books, clicking will take you to "publications " page '
              src={faq.src}
              style={{
                height: "248px", 
                marginLeft: "-48px",
                marginTop: "-24px",
              }}
            />
            <div id="card-content">
            <br/>
              <p style={{fontSize:' 1.2em'}}>FAQ</p>
              <img src={ellipsis.src} style={{height: '55px', marginTop: '-26px', filter: 'invert(100%)'}} alt="orange ellipsis to separate title from text" />
              <p>Here you will find a list of Frequently Asked Questions about our office.</p>
            
            </div>
          </div>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default WaysToHelp;
