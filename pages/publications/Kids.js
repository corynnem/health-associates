import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "./Title";
import back from "../../public/assets/back.png";

const Kids = () => {
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
      <Title pageName={"Do Less For Your Kids"} />
      <br />
      <br />
      <div className="article">
        <p>
          Parents clearly want what is best for their children. But often, in
          our modern, high-tech, materialistic world, we become sidetracked with
          giving our children what is stimulating, what is pleasurable, what is
          exciting, what is fun, and what is comfortable – none of which they
          have to earn. Despite all the research, the self-help books, and the
          how—to—parent books that fill modern bookstore shelves, it appears
          that contemporary parents have lost a primary focus for parenting:
          namely, how to teach children responsibility.
        </p>
        <br />
        <p>
          Before pushing on toward successful adulthood, children must acquire
          many skills. Some of the crucial elements include learning how to:
        </p>
        <ul>
          <li>Make decisions that protect himself/ herself</li>
          <li>Make decisions that do not harm others</li>
          <li>Achieve individual goals</li>
          <li>Treat other people fairly</li>
          <li>Understand the laws of society</li>
          <li>Refuse to dull one’s senses with alcohol and drugs</li>
          <li>Work hard for what one gets</li>
          <li>
            Understand that being a marriage partner and later a parent are
            difficult tasks and require consistent effort
          </li>
          <li>
            Realize that very few people go through life having things handed to
            them.
          </li>
        </ul>
        <br />
        <p>
          Our forefathers had the responsibility to teach their children how to
          live in a world that probably was as difficult as ours. That is still
          our responsibility today, but the skills needed for success have been
          altered by our contemporary lifestyle. We have become a service
          oriented society, and few people today possess all of the skills
          needed to be completely independent; i.e., to grow their own food,
          build their own houses, and maintain their means of transportation.
          Rather, ours is an extremely interdependent society that requires us
          to interact with others on an almost continuous daily basis in order
          to achieve or obtain all the goods and services we require.
        </p>
        <br />
        <p>
          Therefore, it is our responsibility as parents to teach old but
          altered skills to our children to enable them to have successful
          lives. A recent article in the Newsletter of the Society for
          Prevention of Violence (Spring 1995) points out that parents cannot
          teach their children values by which they do not live. In order to
          teach responsibility, children must be given reasonable expectations
          and required to follow them. Responsibility is a trait that is learned
          over many years through constant efforts by the parents.
        </p>
        <br />
        <p>
          Successful adults are able to live without constant gratification.
          Doing without, having to wait for things, and working hard to obtain
          what we want are all part of life. Children need to learn that it is
          okay to do without.
        </p>
        <br />
        <p>
          Children also need to develop their own ability to solve problems and
          achieve goals. Consequently, parents should refrain from always doing
          things for their children, but should instead offer suggestions and
          encouragement.
        </p>
        <br />
        <p>
          And what do children learn when they are bailed out of jams time and
          time again by their parents with no thought of consequences? The
          overprotected, just like the under protected, child will tend to enter
          adulthood without the advantages and without the skills he or she
          needs to deal successfully with the life struggle that they must face.
        </p>
        <br />
        <p>
          Clearly the old adage, “Give a man a fish and he eats for a day; teach
          a man to fish and he eats for a lifetime,” is a valuable lesson that
          can easily be applied to our parenting efforts. In general, modern
          parents can be more effective by doing less and requiring more from
          their children. Our children need to hear the phrase, “You need to
          earn…” far more than they need to hear, “OK, you can have that.”
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

export default Kids;
