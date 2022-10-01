import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import { Card } from "antd";
import separator from "../public/assets/separator.png";
import Footer from "../components/Footer/Footer";

const Services = () => {
  const disorders = [
    {
      name: "Attention-Deficit Hyperactivity Disorder",
      desc: "A disorder that manifests as attention difficulty, hyperactivity, and impulsiveness.",
    },
    {
      name: "Anxiety Disorders",
      desc: "A set of disorders characterized by intense, excessive and persistent worry and fear about everyday situations. ",
    },
    {
      name: "Mood Disorders",
      desc: "Several psychological disorders characterized by the elevation or lowering of a person's mood, such as depression or bipolar disorder.",
    },
    {
      name: "Personality Disorders",
      desc: "Personality disorders are long-term patterns of behavior and inner experiences that differs significantly from what is expected. ",
    },
  ];

  const services = [
    {
      name: "Individual and Group Counseling",
      desc: "Psychotherapy in both a group and individual setting.",
    },
    {
      name: "Marriage and Family Counseling",
      desc: "Counseling for married and unmarried couples designed to address problems in their relationship",
    },
    {
      name: "Child and Adolescent Counseling",
      desc: "Psychotherapy in an individual setting for those under the age of 18",
    },
    {
      name: "Divorce Counseling",
      desc: "Counseling to assist those coping with divorce to adapt to the life-changes that result from divorce and achieving psychological and emotional well-being following the divorce",
    },
    {
      name: "Psychological Testing",
      desc: " These may be used to diagnose problems with memory, thought processes, and behaviors",
    },
    {
      name: "Counseling for Panic and Phobias",
      desc: "Psychotherapy designed to decrease anxiety and help people to develop new patterns of thinking and behavior that promote well-being and life fulfilment.",
    },
    {
      name: "Addictions Counseling",
      desc: " Psychotherapy to support individuals throughout the treatment process and create an personalized plan for recovery, relapse prevention, and after-care.",
    },
    {
      name: "Smoking Cessation and Weight Management",
      desc: "Counseling for those looking to quit smoking cigarettes or other types of nicotine.",
    },
    {
      name: "Divorce Mediation and Custody Evaluation",
      desc: "Therapy for couples after divorce, and working on making a custody, visitation, and parenting plan.",
    },
    {
      name: "Psychiatric Treatment",
      desc: "Treatment including various forms of psychotherapy, medications, psychosocial interventions and other treatments, depending on the needs of each patient.",
    },
    {
      name: "Adoption and Foster Parenting Issues",
      desc: "A member or several members of the adoption triad works with a professional like a social worker, a licensed counselor or psychologist to discuss and heal from adoption-related issues.",
    },
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      desc: "A  a form of psychological treatment that has been demonstrated to be effective for a range of problems including depression, anxiety disorders, alcohol and drug use problems, marital problems, eating disorders, and severe mental illness.",
    },
  ];

  const cardStyle = {
    width: 280,
    height: 280,
    marginBottom: "10px",
    marginRight: "10px",
    textAlign: "center",
    backgroundColor: "#324a5f",
    overflow: "scroll",
    color: "white",
  };

  return (
    <div id="services" style={{ fontFamily: "Niramit" }}>
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"Services"} />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center", fontSize: "2.5em" }}>
        Disorders We Specialize in Treating
      </h1>
      <br />
      <div id="service-cards">
        {disorders.map((disorder, i) => {
          return (
            <Card key={i} className="service-card" style={cardStyle}>
              <h3 style={{ color: "white" }}>{disorder.name}</h3>
              <img
                src={separator.src}
                style={{
                  width: "50px",
                  marginTop: "-25px",
                  marginBottom: "-10px",
                  filter: "invert(100%",
                }}
                alt="a line icon to separate words on the page"
              />
              <p>{disorder.desc}</p>
            </Card>
          );
        })}
      </div>
      <br />

      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "2.5em" }}>
        Services we Offer
      </h1>
      <br />
      <div id="service-cards">
        {services.map((disorder, i) => {
          return (
            <Card key={i} className="service-card" style={cardStyle}>
              <h3 style={{ color: "white" }}>{disorder.name}</h3>
              <img
                src={separator.src}
                style={{
                  width: "50px",
                  marginTop: "-25px",
                  marginBottom: "-10px",
                  filter: "invert(100%",
                }}
                alt="a line icon to separate words on the page"
              />
              <p>{disorder.desc}</p>
            </Card>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
