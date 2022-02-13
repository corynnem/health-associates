import React from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Title pageName={'Contact'} />
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
          textAlign: "center",
          fontFamily: "Niramit",
          height: '30vh',
          fontSize: '2em'
        }}
      >
        <h2 style={{ paddingLeft: "70px", paddingRight: "70px" }}>
          Thank you for your message!
        </h2>
        <p>We will be in touch soon.</p>



      </div>
      <div style={{ marginLeft: "32px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
