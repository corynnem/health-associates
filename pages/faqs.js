import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import Footer from "../components/Footer/Footer";

const FAQS = () => {
  const FAQS = [
    {
      q: "Where are you located?",
      a: "Health Associates is located at 9240 N. Meridian Street, Suite 320 (on the third floor). Our gray, brick building sits on the west side of Meridian, south of 96th Street. If coming from I-465, take the Meridian Street exit south toward Indianapolis.",
    },
    {
      q: "Are you accepting new patients?",
      a: "Yes! We have both male and female therapists who are taking new patients. Contact us to be matched with one that specializes in your needs.",
    },
    {
      q: "Is Telehealth available?",
      a: "Yes! All our therapists have Telehealth options. While we believe there is no equal substitute for in person, face to face therapy, the pandemic has brought about new ways to effectively serve our clients. We offer telephone and audio-visual options. Please note, we ask that you come in person to our office for your initial evaluation. Telehealth appointments can be scheduled thereafter.",
    },
    {
      q: "Do you take insurance?",
      a: "Yes! Our therapists participate in most major insurance networks, including Anthem Blue Cross & Blue Shield. See our list of providers for more information, or call us today! It is important that you contact your insurance company ahead of time to learn more about your mental health benefits. Every policy is different, and we want you to be informed about any out of pocket expenses you may incur. Typically, this might include an office visit copay, coinsurance or deductible, and you will pay that amount at the time of each service.",
    },
    {
      q: "Will you file claims to my insurance company?",
      a: "If you have mental health benefits, we will file a claim to your insurance company as a courtesy to you. Additionally, we will obtain prior authorization for tests or procedures if it is required by your plan. Please understand that any services not covered by your insurance are your responsibility. It is imperative that you provide current plan cards at the time of service. If your insurance plan changes for any reason, it is your responsibility to provide us updated information at the time of service. If not, you will be held responsible for the full amount of the visit.",
    },
    {
      q: "What should I expect at my first appointment?",
      a: "First and foremost, our goal is for you to be comfortable in your initial session. We will ask for some basic information and have you complete our registration forms. Many clients prefer to fill these out prior to the initial session. Registration forms are available for download on our website under “Forms.” Patients over 18 must complete the “Adult Intake” registration form. If you have mental health benefits as part of your insurance plan, please be sure to bring your insurance card with you to your first appointment. We’ll make a copy of it and verify your coverage. Your initial session will last approximately 45-60 minutes, and together you and your therapist will identify issues and develop goals for follow-up visits.",
    },
    {
      q: "What if my child is the patient?",
      a: "If you are coming to discuss issues regarding a minor under 18, you will complete our “Child Intake” registration form. The initial session will typically not include the child. This allows you and your therapist to discuss your concerns candidly in a private, comfortable setting. Follow-up visits will include the child individually, you and/or another parent, or a combination of both depending on what you and your therapist feel is best for the child. Appointments will last 45-60 mins.",
    },
  ];

  return (
    <div id="faq">
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"FAQs"} />
      <br />
      <br />
      <br />
      <div id="faqs">
        {FAQS.map((faq, i) => {
          return (
            <div key={i}>
              <h1>{faq.q}</h1>
              <p>{faq.a}</p>
              <br />
              {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> */}
              <hr />
              {/* </div> */}

              <br />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FAQS;
