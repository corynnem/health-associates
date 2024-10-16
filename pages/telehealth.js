import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import groff from "../public/headshots/GROFF.jpeg";
import dodini from "../public/headshots/DODINI.jpeg";
import Footer from "../components/Footer/Footer";

const Telehealth = () => {
  const [URL, setURL] = useState("");
  const [providers] = useState([
    {
      name: "Martin Groff",
      headshot: groff.src,
      position: "Clinical Psychologist",
      link: "http://doxy.me/martingroffphd",
      snippet:
        "Martin Groff, Ph.D., is a psychologist who treats children, adolescents and adults for emotional and behavioral issues such as depression, anxiety, anger, mood cycling, situational distress, interpersonal/social concerns, bereavement, trauma, ADHD and conduct problems.",
    },
    {
      name: "Alfred Dodini",
      headshot: dodini.src,
      position: "Clinical Social Worker",
      link: "https://doxy.me/drdodini",
      snippet:
        "Dr. Alfred (Fred) Dodini is a Licensed Clinical Social Worker and a Certified Family Life Educator with a Ph.D. in marriage and family therapy from Purdue University. He has 22 years of clinical experience working with couples, families, trauma, anxiety, depression, addictions, and life transitions. ",
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
        setURL("https://www.healthassociatesindy.com/");
    }
  }, []);

  return (
    <div id="telehealth">
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"Telehealth"} />
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
                  <br />

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
      <Footer />
    </div>
  );
};

export default Telehealth;
