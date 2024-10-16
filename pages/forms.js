import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import Footer from "../components/Footer/Footer";
import { Popover } from "antd";

const Forms = () => {
  const content = <p style={{ height: "10px" }}>Download PDF</p>;

  const style = {
    width: "150px",
  };

  return (
    <div style={{ fontFamily: "Niramit" }} id="forms">
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <div>
        <Title pageName={"Forms"} />
      </div>

      <br />
      <br />
      <div
        style={{
          padding: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginLeft: "-100px" }}>Downloadable PDF&lsquo;s</h1>
        <ul style={{ marginLeft: "10px", width: "300px" }}>
          <Popover content={content}>
            <li style={style}>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/Child_Intake.pdf"
                >
                  Child Intake Form
                </a>
              </h3>
            </li>
          </Popover>
          <Popover content={content}>
            <li style={style}>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/Adult_Intake.pdf"
                >
                  Adult Intake Form
                </a>
              </h3>
            </li>
          </Popover>
          <Popover content={content}>
            <li style={style}>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/Office_Policies.pdf"
                >
                  Office Policies
                </a>
              </h3>
            </li>
          </Popover>
          <Popover content={content}>
            <li style={{ width: "250px" }}>
              <h3 style={{ width: "250px" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/HIPAA_Form.pdf"
                >
                  Health Insurance Portability and Accountability Act (HIPAA)
                  Form
                </a>
              </h3>
            </li>
          </Popover>
          <Popover content={content}>
            <li style={{ width: "250px" }}>
              <h3 style={{ width: "250px" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/Release_Form.pdf"
                >
                  Release Form
                </a>
              </h3>
            </li>
          </Popover>
          <Popover content={content}>
            <li style={{ width: "250px" }}>
              <h3 style={{ width: "250px" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/forms/Communication_Consent.pdf"
                >
                  Communication Acknowledgment and Consent Form
                </a>
              </h3>
            </li>
          </Popover>
        </ul>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Forms;
