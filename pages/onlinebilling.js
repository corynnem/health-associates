import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import groff from "../public/headshots/GROFF.jpeg";
import grana from "../public/headshots/GRANA.jpg";
import couvillion from "../public/headshots/COUVILLION.jpeg";
import elsbury from "../public/headshots/ELSBURY.jpg";
import westrate from "../public/headshots/WESTRATE.jpeg";
import hess from "../public/headshots/HESS.jpeg";
import dodini from "../public/headshots/DODINI.jpeg";
import haskins from "../public/headshots/HASKINS.jpg";
import Footer from "../components/Footer/Footer";

const OnlineBilling = () => {
  const [URL, setURL] = useState("");
  const [providers] = useState([
    {
      name: "Martin Groff",
      altText: "Martin Groff's Headshot",
      headshot: groff.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/VEVYFELBDK4FBVZ3QIALLUFM?src=sheet",
    },
    {
      name: "Richard K. Grana",
      altText: "Richard K. Grana's Headshot",
      headshot: grana.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/5JVQIY3ORY6AFPXSNWCRFWGE?src=sheet",
    },
    {
      name: "Patricia M. Couvillion",
      altText: "Patricia M. Couvillion's Headshot",
      headshot: couvillion.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/SMER22DNI2ZAWUWU3ENLH5OP?src=sheet",
    },
    {
      name: "Kristina K. Elsbury",
      altText: "Kristina K. Elsbury's Headshot",
      headshot: elsbury.src,
      position: "Clinical Social Worker",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/JKUIQN65TO5PNBZFGAWFVQCT?src=sheet",
    },
    {
      name: "Ronald M. Westrate",
      altText: "Ronald M. Westrate's Headshot",
      headshot: westrate.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/GE2IKASZYNS6WCLL33EROH5I?src=sheet",
    },
    {
      name: "Jacqueline L. Hess",
      altText: "Jacqueline L. Hess' Headshot",
      headshot: hess.src,
      position: "Clinical Psychologist",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/ASIGH6YZTERM2WDTTLPMRFRM?src=sheet",
    },
    {
      name: "Alfred Dodini",
      altText: "Alfred Dodini's Headshot",
      headshot: dodini.src,
      position: "Clinical Social Worker",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/56266NJKQ2QU23XW5NDJX36D?src=sheet",
    },
    {
      name: "Edmund Haskins",
      altText: "Edmund Haskins' Headshot",
      headshot: haskins.src,
      position: "",
      link: "https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/S3B2W7OGAP7GATSNOP3T37PD",
      snippet: "",
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
      <Title pageName={"Pay Your Bill Online"} />
      <br />
      <br />
      <div id="pub-holder">
        {providers.map((provider, i) => {
          return (
            <div id="ob-card" key={i}>
              <div id="card-container">
                <img src={provider.headshot} alt={provider.altText} />
                <div id="pub-text" className="section">
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
                  <a
                    id="pub-button"
                    href={provider.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Submit a Payment</button>
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
