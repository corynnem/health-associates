import React, { useEffect, useState } from "react";
import ContactNav from "./ContactNav";
import menuIcon from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import lineIcon from "../assets/line.png";
import cancelIcon from "../assets/cancel.png";

const Navigation = ({ style }) => {
  const [open, setOpen] = useState(false);
  const [URL, setURL] = useState("");

  // if you want to use DOM look below
  // if(process.browser) {
  //   console.log(document.querySelector('.left_menu'))
  // }


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
    <div>
      <header className="left_menu">
        <input type="checkbox" id="main_menu" name="main_menu" />
        <span className="logo">Health Associates</span>
        <h4 className="sub-title ">Counseling and Psychology Service</h4>
        <label htmlFor="main_menu">
          <div
            className="hamburger hamburger--elastic"
            type="button"
            aria-label="Menu"
            aria-controls="main_menu"
          >
            {" "}
            <span className="hamburger-box">
              {" "}
              <img
                id="menu-icon"
                src={menuIcon.src}
                style={{ height: "30px" }}
                alt="Navigation icon, click to access navigation bar"
              />
            </span>{" "}
          </div>
        </label>
        <div id="open-contact">
          <div style={{ marginTop: "30px", marginRight: "8vw" }}>
            <h1 id="title">Health Associates</h1>
            <h4 id="sub-title">Counseling and Psychology Service</h4>
          </div>
          <ContactNav />
          </div>
        {/* <div > */}
          <nav style={style}>
            <ul>
              <li>{/* <h1 className="logo inner">Health Associates</h1> */}</li>
              <li>
                {" "}
                <a href={'https://health-associates.herokuapp.com/'}>Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href={`${URL}/about`}>About</a>{" "}
              </li>
              <li>
                {" "}
                <a href={`${URL}/services`}>Services</a>{" "}
              </li>
              <li>
                {" "}
                <a href={`${URL}/providers`}>Providers</a>{" "}
              </li>
              <li>
                {" "}
                <a href={`${URL}/publications`}>Publications</a>{" "}
              </li>
              <li>
                {" "}
                <a href={`${URL}/contact`}>Contact Us</a>{" "}
              </li>
              <li id="closed-contact">
                <ContactNav />
              </li>
            </ul>
          </nav>
        {/* </div> */}
      </header>
    </div>
  );
};

export default Navigation;