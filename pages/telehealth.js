import React, { useState, useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import reflections from "./publications/photos/reflections.jpeg";
import groff from "./assets/headshots/GROFF.jpeg";
import searchIcon from './assets/search.png'
import cancelIcon from './assets/cancel.png'
import Footer from "./ResusableComponents/Footer";


const Telehealth = () => {
  const [URL, setURL] = useState('')
  const [providers] = useState([
    {
      name: "Martin Groff",
      headshot: groff.src,
      position: "Clinical Psychologist",
      link: 'http://doxy.me/martingroffphd',
      snippet: "Martin Groff, Ph.D., is a psychologist who treats children, adolescents and adults for emotional and behavioral issues such as depression, anxiety, anger, mood cycling, situational distress, interpersonal/social concerns, bereavement, trauma, ADHD and conduct problems."
    },
  ]);


  useEffect(() => {
    switch (window.location.hostname) {
      case "localhost" || "127.0.0.2":
        setURL("http://localhost:3000");
        break;
      case "health-associates.herokuapp.com/":
        setURL("https://health-associates.herokuapp.com/");
      case "www.healthassociatesindy.com":
        setURL("https://health-associates.herokuapp.com/");
    }
}, [])





  return (
    <div id="telehealth">
      <Navigation   style={{width: '300px', marginLeft: '40px'}} />
      <Title pageName={"Telehealth"} />
      <br />
      <br />
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3> <input onChange={(e) => filter(e)} placeholder="Search Articles..." id='input'/></h3></div> */}
      <div id="pub-holder">
        {providers.map((provider, i) => {
          return (
            <div  id="pub-card" key={i} >
              <div id='card-container'>
                <img  src={provider.headshot} alt={provider.altText}/>
                <div id="pub-text">
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                  <h1>{provider.name} </h1> <p style={{color: 'grey', fontSize:"1.4em", marginTop: '-20px'}}>{provider.position}</p>
                    </div>
                
                  <p>{provider.snippet}</p>
                  <br/>
                  
                  <a id="pub-button">
                  <button
              
                onClick={() => window.location.assign(provider.link)}
              >
                Start A Call
              </button>
                  </a>
               
                </div>
              </div>
             
            </div>
          );
        })}
      </div>
        <Footer/>
    </div>
  );
};

export default Telehealth;


