import React from "react";
import Doctors from "../components/Home/Doctors";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import Footer from "../components/Footer/Footer";

const Providers = () => {
  const styles = {
    left: {
      marginLeft: "10px",
      marginBottom: "-50px",
    },
    right: {
      marginLeft: "50px",
    },
    center: {
      marginLeft: "30px",
      marginTop: "-90px",
      lineHeight: "70px",
    },
  };

  return (
    <div>
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title pageName={"Providers"} styles={styles} />
        {/* <img src={separator.src} className="separator"  alt='A line icon separating the title from the rest of the text on the page'/> */}
        <br />
        <Doctors />
      </div>
      <div style={{ marginLeft: "32px" }}>
        <Footer style={{ marginLeft: "-32px" }} />
      </div>
    </div>
  );
};

export default Providers;
