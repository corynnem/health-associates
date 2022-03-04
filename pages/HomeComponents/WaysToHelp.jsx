import React, { useState, useEffect } from "react";
import { Card } from "antd";
import ellipsis from "../assets/ellipsis.png";
import telehealth from "../assets/telehealth.jpg";
import onlinePay from "../assets/online-pay.jpg";
import faq from "../assets/faq.jpg";
import right from "../assets/right-chevron.png";

const WaysToHelp = () => {
  const [URL, setURL] = useState("");


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
    <div id="ways-help">
      <div id="help-cards" style={{marginLeft: '40px'}}>
        <Card  style={{marginTop: '200px'}} className="w2h-card">
          <a href={`${URL}/telehealth`}>
            <div className="img_wrapper">
              <img
              className="w2h_img"
                alt='A photo of a telehealth talking to their client, clicking will take you to "services" page '
                src={telehealth.src}
                style={{
                  marginLeft: "-48px",
                  marginTop: "-24px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  id="card-content"
                  style={{
                    width: "220px",
                    borderRadius: "50px",
                    position: "sticky",
                    marginTop: "-35px",
                  }}
                >
                  <br />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontSize: " 1.2em",
                        marginTop: "-10px",
                        marginLeft: "10px",
                      }}
                    >
                      Telehealth Check-In{" "}
                    </p>{" "}
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        filter: "invert(100%)",
                        marginLeft: "10px",
                        marginTop: "-5px",
                      }}
                      src={right.src}
                      className="arrow"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Card>
        <Card  style={{marginTop: '200px'}} className="w2h-card">
          <a href={`https://checkout.square.site/merchant/MLXQTAGAQFQ19/checkout/SWSQLGDVPD52OYEUAM3E7GYR`}>
            <div className="img_wrapper">
              <img
              className="w2h_img"
                alt='A photo of two people talking to eachother while looking at an ipad, clicking will take you to "services" page in the onlinePaying section'
                src={onlinePay.src}
                style={{
                  marginLeft: "-48px",
                  marginTop: "-24px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  id="card-content"
                  style={{
                    width: "165px",
                    borderRadius: "50px",
                    position: "sticky",
                    marginTop: "-35px",
                  }}
                >
                  <br />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontSize: " 1.2em",
                        marginTop: "-10px",
                        marginLeft: "10px",
                      }}
                    >
                      Online Bill Pay
                    </p>
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        filter: "invert(100%)",
                        marginLeft: "10px",
                        marginTop: "-5px",
                      }}
                      src={right.src}
                      className="arrow"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Card>
        <Card  style={{marginTop: '200px'}} className="w2h-card">
          <a href={`${URL}/faqs`}>
            <div className="img_wrapper">
              <img
              className="w2h_img"
                alt='A red telephone on a white background, clicking will take you to Frequenty Asked Questions page. '
                src={faq.src}
                style={{

                  marginLeft: "-48px",
                  marginTop: "-24px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  id="card-content"
                  style={{
                    width: "100px",
                    borderRadius: "50px",
                    position: "sticky",
                    marginTop: "-35px",
                  }}
                >
                  <br />
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontSize: " 1.2em",
                        marginTop: "-10px",
                        marginLeft: "15px",
                      }}
                    >
                      FAQ
                    </p>{" "}
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        filter: "invert(100%)",
                        marginLeft: "10px",
                        marginTop: "-5px",
                      }}
                      src={right.src}
                      className="arrow"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default WaysToHelp;
