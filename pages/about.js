import React, { useState, useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";
import location from "./assets/healthassociates.jpeg";

const About = () => {
  const [URL, setURL] = useState('')

    const styles = {
        left: { 
            marginLeft: '10px',
            marginBottom: '-50px',
        },
        right: {
            // marginLeft: '50px',
        },
        center: {
            // marginLeft: '30px',
            // marginTop: '-90px',
            // lineHeight: '70px'
        }
    }
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
    <div id="about">
      <Navigation style={{width: '300px', marginLeft: '40px'}} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title pageName={"About"} styles={styles}/>
      </div>
      <br/>
      <br/>
      <br/>
      <div id="abt-main">
        <img src={location.src} id="abt-img" alt="A photo of the building where Health Associates runs it's practice" style={{width: '350px'}}/>
        <div id="abt-text">
          <p>
            Health Associates is a group of mental health professionals
            dedicated to the well being of our clients. We approach
            psychological health utilizing various treatment methods, including
            individual, family and group counseling, cognitive and behavioral
            methods, biofeedback training, nutritional guidance, exercise
            recommendations, and stress management techniques. Please browse
            this website to learn valuable information about our services.
          </p>
          <br />
          <p>
            There often may be a concern about the cost of counseling. National
            statistics show that many people who seek psychological services
            report improvement after six to ten sessions, so counseling is
            frequently not a long term process. Health Associates is dedicated
            to keeping our fees reasonable and within the limits of customary
            charges for counseling services. Most insurance companies
            provide for counseling as a part of their health benefits package.
            Consult your policy for a list of covered services.
          </p>
          <br />
          <p>
            In addition to providing pychological services, Health Associates writes and 
            publlishes articles covering important health topics. We have written on
            topics such as Attention-Deficit / Hyperactivity Disorder, Marriage,
            Childrearing, Anger, and Infidelity. These articles can be viewed on our
            website <a href={`${URL}/publications`}>here</a>
          </p>
        </div>
      </div>

      <div style={{ marginLeft: "32px" }}>
      <Footer style={{marginLeft: '-32px'}} />
      </div>
    </div>
  );
};

export default About;
