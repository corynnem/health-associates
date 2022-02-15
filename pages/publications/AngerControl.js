import React, { useState, useEffect } from "react";
import Navigation from "../Nav/Navigation";
import Title from './Title'
import back from "../assets/back.png";

const AngerControl = () => {
  const [URL, setURL] = useState("");

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
      <Navigation />
      <Title pageName={"Controlling Anger"} />
      <br />
      <br />
      <div className="article">
        <p>
          It is not anger as a feeling that causes problems so much as it is our
          response to feeling angry. Our behavior tells the tale.
        </p>
        <br />
        <p>
          As a result of our inability to express anger effectively, often we
          hold anger in and deny that we are angry. This causes the anger to
          build up over a period of time. Finally, the most trivial of incidents
          will trigger the inevitable explosion. Often, we’ll “blame” others for
          making us angry. (“If only you had not said that to me, I would not be
          so angry.”)
        </p>
        <br />
        <p>
          No matter what your style for expressing anger, acknowledging that you
          feel angry and learning to express your anger in an appropriate manner
          without blaming others is the first step towards managing it more
          effectively.
        </p>
        <br />
        <p>
          When we feel angry, our choices may seem limited. We do not think
          about taking a walk, doing some breathing exercises, or even stopping
          to think about what is making us angry. Instead, we leap ahead,
          thinking first of our response and how we can defend ourselves, and
          secondly, how we can avenge ourselves for the wrongs that were
          committed against us. Our listening skills decrease dramatically at a
          time when we most need them. As a result, we find ourselves angry
          about things that we thought we heard.
        </p>
        <br />
        <p>
          The goal of anger management is not to stop feeling angry. That is
          impossible since anger is a normal human emotion. Instead, we must
          change our behavior when we are angry. Rather than holding our anger
          inside (“stuffing”), or over—expressing our anger in nasty ways
          (“escalating”), we can learn to express our anger in a more assertive
          manner (“directing”).
        </p>
        <br />
        <h1>Daily Strategies for Managing Anger</h1>
        <ul>
          <li>
            <b style={{ fontFamily: "Bold" }}>Use positive self-talk</b> to
            prepare yourself for people or situations which usually cause you to
            feel angry. Remind yourself that you can handle whatever the other
            person says to you, stay cool, and listen to what the person is
            saying.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}>
              Utilize deep breathing and relaxation
            </b>{" "}
            techniques to maintain a physical calm—ness during situations that
            provoke angry feelings.
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}>Use direct communication</b> to
            disclose your feelings. Start with “I feel angry; I wish you would
            tell me when you want me to do something for you.” By using this
            format you can express almost any feeling and give information to
            the other person about what you want or need from them. Even if this
            does not drastically change the current situation, it helps to
            prepare for the next time you feel angry and want
          </li>
          <li>
            <b style={{ fontFamily: "Bold" }}>In all cases, fight fairly</b>{" "}
            with the other person. Remember that adults can reason, and do not
            need to automatically return to adolescence simply because they get
            angry or hurt.
          </li>
        </ul>
      </div>
      <br/>
      <a href={`${URL}/publications`} id="back-nav">
        {" "}
        <img src={back.src} alt='left facing arrow'  />
        Back to Publications
      </a>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AngerControl;
