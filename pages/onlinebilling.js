import React, { useState, useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import groff from "./assets/headshots/GROFF.jpeg";
import grana from "./assets/headshots/GRANA.jpg";
import couvillion from "./assets/headshots/COUVILLION.jpeg";
import elsbury from "./assets/headshots/ELSBURY.jpg";
import westrate from "./assets/headshots/WESTRATE.jpeg";
import hess from "./assets/headshots/HESS.jpeg";
import dodini from "./assets/headshots/DODINI.jpeg";

import Footer from "./ResusableComponents/Footer";

const OnlineBilling = () => {
  const [URL, setURL] = useState("");
  const [providers] = useState([


    {
      name: "Martin Groff",
      altText: "Martin Groff's Headshot",
      headshot: groff.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/VEVYFELBDK4FBVZ3QIALLUFM?src=sheet",
      snippet:
        "Martin Groff, Ph.D., is a psychologist who treats children, adolescents and adults for emotional and behavioral issues such as depression, anxiety, anger, mood cycling, situational distress, interpersonal/social concerns, bereavement, trauma, ADHD and conduct problems.",
    },
    {
      name: "Richard K. Grana",
      altText: "Richard K. Grana's Headshot",
      headshot: grana.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/5JVQIY3ORY6AFPXSNWCRFWGE?src=sheet",
      snippet:
        "Richard Grana, Ph.D. has been a practicing psychologist for over 45 years. He is licensed as a psychologist in Indiana and Arizona, as well as having a tele-health license for patients in Florida. Dr. Grana has worked with all ages of patients. Currently, his professional focus is on individual counseling with children and adults." 
    },
    {
      name: "Patricia M. Couvillion",
      altText: "Patricia M. Couvillion's Headshot",
      headshot: couvillion.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/SMER22DNI2ZAWUWU3ENLH5OP?src=sheet",
      snippet:
        "Dr. Pat Couvillion is a licensed clinical psychologist who received her doctorate from Florida State University. Dr. Couvillion has over 30 years of professional psychotherapy experience. She focuses on counseling adults and couples with depression, anxiety, relationship problems, life transitions and general stressors." 
    },
    {
      name: "Kristina K. Elsbury",
      altText: "Kristina K. Elsbury's Headshot",
      headshot: elsbury.src,
      position: "Clinical Social Worker",
      link:  "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/JKUIQN65TO5PNBZFGAWFVQCT?src=sheet",
      snippet:
        "Kristina Elsbury, LCSW, is a licensed clinical social worker with a Masters of Social Work degree with a medical specialty from Indiana University. The last 9 years she has provided therapy to children, teens, and adults in home-based, community mental health, hospital and school-based programs."
    },
    {
      name: "Ronald M. Westrate",
      altText: "Ronald M. Westrate's Headshot",
      headshot: westrate.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/GE2IKASZYNS6WCLL33EROH5I?src=sheet",
      snippet:
      "Dr. Ronald M. Westrate is a licensed clinical psychologist, receiving a doctorate from Purdue University.  Dr. Ron works with youth and adults alike, focusing on a variety of issues including addiction, anger management, couples therapy and post-traumatic stress disorder with veterans and non-veterans alike. Dr. Ron uses multiple treatment modalities, including a strong emphasis on mindfulness practices.",
    },
    {
      name: "Jacqueline L. Hess",
      altText: "Jacqueline L. Hess' Headshot",
      headshot: hess.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/ASIGH6YZTERM2WDTTLPMRFRM?src=sheet",
      snippet:
      "Dr. Jackie Hess has been a Clinical Psychologist working in private practices as an independent practitioner for 29 years. She received a Bachelor’s degree in Psychology from Bucknell University, a Master of Science in Rehabilitation Counseling from Southern Illinois University, and the Doctor of Psychology Degree from Wright State University. She currently works with adults ages 18 and older.",
    },
    {
      name: "Alfred Dodini",
      altText: "Alfred Dodini's Headshot",
      headshot: dodini.src,
      position: "Clinical Social Worker",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/56266NJKQ2QU23XW5NDJX36D?src=sheet",
      snippet:
      "Dr. Alfred (Fred) Dodini is a Licensed Clinical Social Worker and a Certified Family Life Educator with a Ph.D. in marriage and family therapy from Purdue University. He has 22 years of clinical experience working with couples, families, trauma, anxiety, depression, addictions, and life transitions. He worked with teens and young adults for five years while serving as clinical director for a residential treatment program for troubled youth.",
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
  }, []);

  return (
    <div id="telehealth">
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"Online Billing"} />
      <br />
      <br />
      <div id="pub-holder">
        {providers.map((provider, i) => {
          return (
            <div id="pub-card" key={i}>
              <div id="card-container">
                <img src={provider.headshot} alt={provider.altText} />
                <div id="pub-text">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1>{provider.name} </h1>{" "}
                    <p
                      style={{
                        color: "grey",
                        fontSize: "1.4em",
                        marginTop: "-20px",
                      }}
                    >
                      {provider.position}
                    </p>
                  </div>

                  <p>{provider.snippet}</p>
                <br/>
                  <a id="pub-button" href={provider.link} target="_blank" rel="noreferrer">
                    <button
                    
                    >
                     Submit a Payment
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default OnlineBilling;
