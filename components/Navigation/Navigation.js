import React, { useEffect, useState } from "react";
import ContactNav from "./ContactNav";
import menuIcon from "../../public/assets/menu.png";
import HA from "../../public/assets/ha.jpg";
import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/forms/Child_Intake.pdf"
      >
        Child Intake Form
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/forms/Adult_Intake.pdf"
      >
        Adult Intake Form
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/forms/HIPAA_Form.pdf">
        HIPPA Form
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/forms/Office_Policies.pdf"
      >
        Office Policies
      </a>
    </Menu.Item>
  </Menu>
);

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
        console.log(window.location.hostname);
        setURL("http://localhost:3000");
        break;
      case "health-associates.herokuapp.com/":
        console.log(window.location.hostname);
        setURL("https://health-associates.herokuapp.com/");
      case "www.healthassociatesindy.com":
        console.log(window.location.hostname);
        setURL("https://www.healthassociatesindy.com/");
    }
  }, []);

  return (
    <div>
      <header className="left_menu">
        <input type="checkbox" id="main_menu" name="main_menu" />
        <div style={{ marginTop: "30px", marginRight: "8vw" }}>
          <img
            id="logo"
            src={HA.src}
            style={style}
            alt="The Health associates logo"
          />

          {/* <span className="logo">Health Associates</span>
        <h4 className="sub-title ">Counseling and Psychology Service</h4> */}
        </div>
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
            <img
              id="web-logo"
              src={HA.src}
              alt="The Health associates logo"
              style={{ width: "350px", marginTop: "-20px" }}
            />
            {/* <h1 id="title">Health Associates</h1>
            <h4 id="sub-title">Counseling and Psychology Service</h4> */}
          </div>
          <ContactNav />
        </div>
        {/* <div > */}
        <nav>
          <ul>
            <br />
            {/* <li><h1 className="logo inner">Health Associates</h1></li> */}
            <li>
              {" "}
              <a href={URL}>Home</a>{" "}
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
              <a href={`${URL}/publications`}> Articles</a>{" "}
            </li>
            <li>
              {" "}
              <a href={`${URL}/faqs`}> FAQ&apos;s</a>{" "}
            </li>
            <li>
              {" "}
              <a href={`${URL}/contact`}>Contact Us</a>{" "}
            </li>
            <li>
              {" "}
              <a href={`${URL}/forms`}>
                {" "}
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                  <Button
                    style={{
                      backgroundColor: "#CCC9DC",
                      fontSize: "1em",
                      borderStyle: "none",
                    }}
                  >
                    Forms
                  </Button>
                </Dropdown>
              </a>{" "}
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
