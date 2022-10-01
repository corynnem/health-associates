import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "./Title";
import back from "../../public/assets/back.png";

const Anger = () => {
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
      <Title pageName={"I’m so Angry I Could…"} />
      <br />
      <br />
      <div className="article">
        <p>
          Anger, anger, anger… everywhere anger… anger in the streets, violence
          in our schools, violence towards those of another religion, even anger
          in our homes. Anger in its extreme becomes hatred and leads to
          problems such as racism, violence and death.
        </p>
        <br />
        <p>
          We at Health Associates have chosen to devote this entire issue of
          Optimum to the subject of anger or three reasons: first, because anger
          is so prevalent in our daily lives; second, because anger can be
          destructive to both our health and our personal relationships; and
          third and most importantly, because anger can be corrected if it is
          addressed and dealt with by the individual, either by himself or under
          the guidance of a professional.
        </p>
        <br />
        <p>
          Most psychotherapists would agree that it is feelings of anger which
          bring many people to them for assistance. These feelings of anger may
          be in the form of dissatisfaction in their marriage, unhappiness as
          parents, frustration with work or dissatisfaction with personal
          traits.
        </p>
        <br />
        <p>
          These feelings may be described as a frustration or disappointment for
          some, or example, the annoyance one feels towards a child or spouse.
          But for others the feelings have become much more intense and are felt
          as bitterness, resentment and rage.
        </p>
        <br />
        <p>
          The lower levels of anger are often normal, not especially bothersome
          and usually transient. When the feelings become long—lasting and
          intense they begin to move into the anger zone that can disrupt
          relationships, challenge the closeness two people may have, and even
          result in a relationship beyond repair. Intense anger can damage
          everything or everyone who is important to us.
        </p>
        <br />
        <p>
          And, in the extreme, chronic, intense anger can lead to severe forms
          of emotional disturbance and behavior patterns that may result in
          severely disturbed family life, drug and alcohol abuse, and family
          violence.
        </p>
        <br />
        <p>
          What are some of the reasons therapists see anger in their clients and
          family life? Some people are chronically tense and fatigued,
          attempting to do too much too quickly, resulting in impatience and
          increased volatility. For them, time and not controlling their pace of
          activity becomes the enemy.
        </p>
        <br />
        <p>
          For many, unemployment is a factor, resulting in anger, guilt,
          frustration and fear of future financial problems. Still others live
          with lowered self—esteem due to unmet emotional needs. Some people
          have grown up in angry, violent families, so expression of anger and
          frustration are often daily parts of coping with problems. And, for
          many adults, life has become unmanageable and there is a true feeling
          of a lack of control over their lives.
        </p>
        <br />
        <p>
          Persistent anger is often expressed physically in the form of pain
          (stomach pain, headaches, chest, back or joint pain and high blood
          pressure), or moodiness, irritability and depression.
        </p>
        <br />
        <p>
          Frequently, we have difficulty in identifying anger or accurately
          labeling it. Many women often fear that expressing anger suggests they
          are an unloving person. They’ve become socialized to present
          themselves as a loving and accepting person, so they may say they are
          “hurt” or “sad” instead of honestly identifying the emotion as anger.
          If the feeling is not correctly identified, complications are
          inevitable in a relationship.
        </p>
        <br />
        <p>
          Men frequently find themselves expressing anger or frustration with
          more comfort than women because they have been socialized to be more
          aggressive and not let other feelings interfere with their goals. Men
          often speak of being “fed up, angry, disgusted” when they actually may
          be feeling rejected, sad, afraid or hurt.
        </p>
        <br />
        <p>
          Another way of looking at the effect of anger is to look at what is
          not being given to others because of one’s anger. Anger blocks being
          kind, giving praise, touching and hugging, spending time with the
          person we’re angry with, talking, and preventing marital intimacy.
        </p>
        <br />
        <p>
          Hostility and violence in our society should be of great concern to
          all of us on a personal level because we can make a difference. While
          we do not have much power over society, we do have a great influence
          over our individual emotions and behaviors as well as those of our
          family members. By controlling our anger in the home, we teach our
          children coping skills which will serve them well in their future.
        </p>
        <br />
      </div>
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

export default Anger;
