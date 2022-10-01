import React, { useEffect, useState } from "react";
import background from "../public/assets/background.jpg";
import Doctors from "../components/Home/Doctors";
import WaysToHelp from "../components/Home/WaysToHelp";
import separator from "../public/assets/separator.png";
import Footer from "../components/Footer/Footer";

const App = () => {
  const [URL, setURL] = useState("");

  useEffect(() => {
    switch (window.location.hostname) {
      case "localhost" || "127.0.0.2":
        setURL("http://localhost:3000");
        break;
      case "health-associates.herokuapp.com/":
        setURL("https://health-associates.herokuapp.com/");
      case "www.healthassociatesindy.com":
        setURL("http://www.healthassociatesindy.com/");
    }
  }, []);

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
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                id="main-button"
                onClick={() => window.location.assign(`${URL}/services`)}
              >
                Services
              </button>
              <button
                id="main-button"
                onClick={() => window.location.assign(`${URL}/contact`)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WaysToHelp />
        </div>

        <div
          style={{
            marginTop: "10vh",
            textAlign: "center",
            fontFamily: "Niramit",
          }}
        >
          <h1>Providers</h1>
          <img
            src={separator.src}
            className="separator"
            style={{ marginTop: "-30px", width: "50px" }}
            alt="A line icon separating the title from the rest of the text on the page"
          />
          <Doctors />
        </div>
      </div>
      <Footer style={{ marginLeft: "-32px" }} />
    </div>
  );
};

export default App;
