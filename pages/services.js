import React from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import { Card } from "antd";
import separator from './assets/separator.png'

const Services = () => {
  const disorders = [
    { name: "Individual and Group Counseling", desc: "Psychotherapy in both a group and individual setting." },
    { name: "Marriage and Family Counseling", desc: "Counseling for married and unmarried couples designed to address problems in their relationship" },
    { name: "Child and Adolescent Counseling", desc: "Psychotherapy in an individual setting for those under the age of 18" },
    { name: "Attention-Deficit Hyperactivity Disorder", desc: "A disorder that manifests as attention difficulty, hyperactivity, and impulsiveness." },
    { name: "Biofeedback (Stress and Pain Control) ", desc: "An alternative medicine approach that teaches people to change the way their bodies function" },
    { name: "Divorce Adjustment Counseling", desc: "Counseling to assist those coping with divorce to adapt to the life-changes that result from divorce and achieving psychological and emotional well-being following the divorce" },
    { name: "Stress Management Training", desc: "The use of specific techniques, strategies, or programs—such as relaxation training, anticipation of stress reactions, and breathing techniques—for dealing with stress-inducing situations and the state of being stressed." },
    { name: "Psychological Testing", desc: " These may be used to diagnose problems with memory, thought processes, and behaviors" },
    { name: "Career Counseling", desc: "Consulation, advice, or guidance specifically focused on a person's career opportunities," },
    { name: "Counseling for Panic and Phobias", desc: "Psychotherapy designed to decrease anxiety and help people to develop new patterns of thinking and behavior that promote well-being and life fulfilment." },
    { name: "Addictions Counseling", desc: " Psychotherapy to support individuals throughout the treatment process and create an personalized plan for recovery, relapse prevention, and after-care." },
    { name: "Smoking Cessation and Weight Management", desc: "Counseling for those looking to quit smoking cigarettes or other types of nicotine." },
    { name: "Divorce Mediation and Custody Evaluation", desc: "Therapy for couples after divorce, and working on making a custody, visitation, and parenting plan." },
    { name: "Psychiatric Treatment", desc: "Treatment including various forms of psychotherapy, medications, psychosocial interventions and other treatments, depending on the needs of each patient." },
    { name: "Consultation with Business and Industry", desc: " Counseling that can help your business increase internal and external communication, improve employee and customer retention, and help you find the right people to wear each of the many hats in your business."},
    { name: "Adoption and Foster Parenting Issues", desc: "A member or several members of the adoption triad works with a professional like a social worker, a licensed counselor or psychologist to discuss and heal from adoption-related issues." },
    { name: "Pain Management", desc: "Aims to help clients eliminate or significantly reduce chronic pain symptoms through targeted psychotherapy." },
  ];

  return (
    <div id="services">
      <Navigation />
      <Title pageName={"Services"} />
      <br />
      <br />
      <br />
      <div style={{padding: '50px'}}>
        <h2>What does the initial Evaluation look like?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est
          lorem ipsum dolor. In ornare quam viverra orci sagittis eu volutpat.
          Odio eu feugiat pretium nibh ipsum consequat nisl. Ut lectus arcu
          bibendum at varius vel pharetra. Pharetra vel turpis nunc eget lorem
          dolor sed viverra ipsum.
        </p>
        <h2>What disorders do we specialize in treating?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est
          lorem ipsum dolor. In ornare quam viverra orci sagittis eu volutpat.
          Odio eu feugiat pretium nibh ipsum consequat nisl. Ut lectus arcu
          bibendum at varius vel pharetra. Pharetra vel turpis nunc eget lorem
          dolor sed viverra ipsum.
        </p>
      </div>

      <div id="service-cards">
        {disorders.map((disorder, i) => {
          return (
            <Card
              style={{
                width: 280,
                height: 280,
                marginBottom: "10px",
                marginRight: "10px",
                textAlign: 'center',
                backgroundColor: '#EFEBCE',
                overflow: 'scroll'
              }}
            >
              <h3>{disorder.name}</h3>
                <img src={separator.src}  style={{width: '50px', marginTop: '-25px', marginBottom: '-10px'}}/>
              <p>{disorder.desc}</p>
            </Card>
          );
        })}
      </div>
      <div style={{padding: '50px'}}>
          <h2>Testing</h2>
          <p>Our staff offers comprehensive psychological testing services in the following areas to facilitate diagnosis and treatment:</p>
          <ul>
              <li>Intelligence</li>
              <li>Achievement</li>
              <li>Personality</li>
              <li>Neuropsychology</li>
              <li>Attention-Deficit / Hyperactivity Disorder</li>
              <li>Vocational Interests</li>
          </ul>
      </div>
    </div>
  );
};

export default Services;
