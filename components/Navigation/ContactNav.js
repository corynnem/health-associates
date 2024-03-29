import React from "react";
import lineIcon from "../../public/assets/line.png";
import phoneIcon from "../../public/assets/phone.png";
import timeIcon from "../../public/assets/time.png";
import atIcon from "../../public/assets/at.png";

const ContactNav = ({}) => {
  const lineStyles = {
    height: "80px",
    opacity: "0.5",
    marginTop: "10px",
    width: "30px",
  };

  const iconStyles = { height: "30px", marginTop: "10px", opacity: "0.5" };

  return (
    <div id="contact-nav">
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div className="contact-section" style={{ marginRight: "1vw" }}>
          <img
            src={phoneIcon.src}
            style={iconStyles}
            className="icon contact-icon"
            alt="A phone icon "
          />
          <img
            src={lineIcon.src}
            style={lineStyles}
            className="icon line-icon"
            alt="A line icon to separate phone icon from phone number "
          />
          <div>
            <p style={{ opacity: "0.7" }} className="contact-label">
              Phone & Fax
            </p>
            <p style={{ fontSize: ".75em", marginTop: "10px" }}>
              (317) 844-7489{" "}
            </p>
            <p style={{ fontSize: ".75em", marginTop: "10px" }}>
              {" "}
              (317) 581-1007{" "}
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div className="contact-section">
          <img
            src={atIcon.src}
            style={iconStyles}
            className="icon contact-icon"
            alt="A at symbol (@) icon "
          />
          <img
            src={lineIcon.src}
            style={lineStyles}
            className="icon line-icon"
            alt="A line icon to separate an at symbol (@) icon from email address"
          />
          <div>
            <p style={{ opacity: "0.7" }} className="contact-label">
              Email
            </p>
            <p style={{ fontSize: ".75em", marginTop: "10px" }}>
              {" "}
              info@healthassociatesindy.com{" "}
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div className="contact-section">
          <img
            src={timeIcon.src}
            style={iconStyles}
            className="icon contact-icon"
            alt="A clock icon "
          />
          <img
            src={lineIcon.src}
            style={lineStyles}
            className="icon line-icon"
            alt="A line icon to separate a clock icon from hours health associates is open"
          />
          <div>
            <p style={{ opacity: "0.7" }} className="contact-label">
              Hours
            </p>
            <p style={{ fontSize: ".75em", marginTop: "10px" }}>
              {" "}
              Monday - Friday 9-5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
