import React from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";
import location from "./assets/healthassociates.jpeg";

const About = () => {

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

  return (
    <div id="about">
      <Navigation />
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
      <div id="abt-main">
        <img src={location.src} id="abt-img" alt="A photo of the building where Health Associates runs it's practice"/>
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
            charges for counseling services. Today, many insurance companies
            provide for counseling as a part of their health benefits package.
            Consult your policy for a list of covered services.
          </p>
          <br />
          <p>
            In addition to Psychological Services, Health Associates issues a
            newsletter covering important health topics. We have written on
            topics such as Attention-Deficit / Hyperactivity Disorder, Marriage,
            Childrearing, Anger, and Infidelity. Back issues of Optimum are
            available by forwarding $3.00 per issue to our office. We also have
            begun to publish The Healthy Minute, and currently we have two
            issues published. Topics covered are anxiety and panic disorder and
            the benefits of biofeedback. Both issues of Healthy Minute are
            included in our site.
          </p>
        </div>
      </div>

      <div style={{ marginLeft: "32px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
