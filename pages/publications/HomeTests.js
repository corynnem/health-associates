import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "./Title";
import back from "../../public/assets/back.png";

const Base = () => {
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
    <div>
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"Using Home Medical Tests"} />
      <div className="article">
        <br />
        <p>
          Many people are discovering that home medical tests can save time,
          money and energy over conventional office or laboratory visits.
          Although home tests are not meant to be a substitute for a doctor’s
          diagnosis, home tests can help to detect an unknown condition which
          could require a follow-up doctor’s visit.
        </p>
        <br />
        <p>
          Listed below are summaries of some of the more common home tests that
          have been approved by the FDA (Federal Drug Administration):
        </p>
        <ul>
          <li>
            <b style={{ fontFamily: "Bold" }}> Blood-pressure kits - </b>{" "}
            Blood-pressure kits account for more than $50 million in sales a
            year. Patients with high blood pressure often wish to keep tabs on
            their health. Research also has shown that some people suffer from
            “white coat hypertension” —- their blood pressure tends to increase
            in the doctor’s office. For these people, blood pressure readings at
            home may be more representative of actual blood pressure. Prices for
            blood pressure devices range from $19.95 to more than $200. There
            are basically three types of blood pressure kits—mercury column
            devices, aneroid devices and electronic devices.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}> Pulse Measurement - </b> Although
            the pulse can be measured without any special equipment, electronic
            pulse meters are available for those who have difficulty monitoring
            their own pulse. In addition, some people want to keep tabs on their
            pulse during exercise without having to stop to check it.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}> Pregnancy Test Kits – </b>{" "}
            Pregnancy kits cost $10 and up. They offer a woman the opportunity
            to detect a pregnancy in the first trimester. The tests can be
            performed within one day of a missed period with results available
            in minutes. According to the FDA, these tests are 90-95 percent
            accurate.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}> Ovulation Predictors –</b> This
            test is used to help couples who are trying to achieve a pregnancy.
            The kit provides instructions to help women determine when ovulation
            is likely to occur.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}> Blood-Sugar Monitors – </b> Home
            tests for blood sugar are frequently used by those who have diabetes
            or a family history of the disease. Spring-loaded lancet devices can
            be bought for about $20. treated – paper strips are smeared with
            blood and then compared with charts to determine blood glucose
            levels. Other tests (about $75) give numerical interpretations of
            blood sugar levels.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}>
              {" "}
              Tests for Blood in the Stool –{" "}
            </b>{" "}
            Home tests for blood in the stool can help detect diseases of the
            colon and rectum, as well as minor problems such as hemorrhoids.
            Although each test is slightly different, most involve exposing a
            fecal smear to a chemical which changes color if blood is present.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}> </b>{" "}
          </li>
        </ul>
        <br />
        <p>
          While home test kits can help healthy people screen themselves for
          illness or monitor a known disorder, proper use is necessary to ensure
          accurate results. Here are some pointers for proper usage of home
          tests:
        </p>
        <ul>
          <li>
            Check the expiration date. An out-of-date kit can give false
            results.{" "}
          </li>
          <li>
            Study the instructions. Proper results depend on following the steps
            exactly as written. Some tests have special dietary restrictions.
          </li>
          <li>Make sure all materials are kept clean. </li>
        </ul>
        <br />
        <p>
          Tests are currently being developed for monitoring blood cholesterol,
          breast cancer and strep throat at home. In the future, those tests
          already available will become even more accurate, convenient and easy
          to use. Home tests offer individuals the exciting opportunity to
          maintain an active partnership with their doctor while monitoring
          their health.u
        </p>
      </div>
      <br />
      <a href={`${URL}/publications`} id="back-nav">
        {" "}
        <img src={back.src} alt="left facing arrow" />
        Back to Publications
      </a>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Base;
