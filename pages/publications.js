import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Header/Title";
import reflections from "../public/articles/reflections.jpeg";
import adhd from "../public/articles/adhd.jpg";
import help from "../public/articles/help.jpg";
import kid from "../public/articles/kid.jpg";
import happy from "../public/articles/happy-couple.jpg";
import unhappy from "../public/articles/unhappy-couple.jpg";
import sports from "../public/articles/sports.jpg";
import anger from "../public/articles/anger.jpg";
import bigAngry from "../public/articles/anger.jpeg";
import sleep from "../public/articles/sleep.jpeg";
import bed from "../public/articles/in-bed.jpeg";
import supermom from "../public/articles/supermom.jpg";
import lineIcon from "../public/assets/line.png";
import searchIcon from "../public/assets/search.png";
import cancelIcon from "../public/assets/cancel.png";
import Footer from "../components/Footer/Footer";

const Publications = () => {
  const [URL, setURL] = useState("");
  const [articles] = useState([
    {
      name: "Reflections",
      publicationDate: "May 10, 2020",
      snippet:
        "Many adults have fast-paced, overfilled schedules that consume their time. They overlook their need for affection, individual time, and relaxation. Too often this hurried lifestyle prevents us from taking care …",
      image: reflections.src,
      altText: "A person looking into a mirror in black and white",
      pageName: "Reflections",
    },
    {
      name: "ADHD, It's Not Just For Kids Anymore",
      publicationDate: "May 10, 2020",
      image: adhd.src,
      altText: "A brain and the word adhd drawn on a blackboard",
      snippet:
        "When people think about Attention Deficit Hyperactivity Disorder (ADHD), most envision a hyper little boy, running around in the classroom, unable to sit still. Or they think of a little …",
      pageName: "ADHD",
    },
    {
      name: "Getting a Good Night's Sleep",
      publicationDate: "November 26, 2018",
      image: sleep.src,
      altText: "Two people holding eachother in bed",
      snippet:
        "Everyone has an occasional sleepless night. But for 20 million Americans, the frustration of chronic insomnia is a big problem. The gimmicks that work for the person with mild sleep …",
      pageName: "Sleep",
    },
    {
      name: "Help!",
      publicationDate: "May 10, 2020",
      image: help.src,
      altText:
        "A laptop with sticky notes all over it, and one in the middle that says Help",
      snippet:
        "Depression and other emotional problems can usually be greatly relieved by changing mental habits. The following steps need to be repeated hundreds of times (or more) over weeks or months …",
      pageName: "Help",
    },
    {
      name: "Do Less For Your Kids",
      publicationDate: "November 26, 2018",
      image: kid.src,
      altText: "A picture of a child picking flowers off of a tree",
      snippet:
        "Parents clearly want what is best for their children. But often, in our modern, high-tech, materialistic world, we become sidetracked with giving our children what is stimulating, what is pleasurable, … ",
      pageName: "Kids",
    },
    {
      name: "What's Happening to Us?",
      publicationDate: "November 26, 2018",
      image: unhappy.src,
      altText: "A couple fighting on a bench in a park",
      snippet:
        "Infidelity-~being sexually unfaithful to your partner. What labels or images does that word bring to your mind? Disloyal? Unfaithful? Joy? Deceit? Lying? Guilt? Excitement? Cheap love? Anxiety?  Lost dreams? Closeness? …",
      pageName: "Infidelity",
    },
    {
      name: "Anger In Sports",
      publicationDate: "November 26, 2018",
      image: sports.src,
      altText: "A referee coaching a girls soccer team",
      snippet:
        "Anger and overt acts of violence are becoming an increasing concern in sports today, not just at the college and professional level but also among younger students. Even amateur adult …",
      pageName: "Sports",
    },

    {
      name: "Controlling Anger",
      publicationDate: "November 26, 2018",
      image: anger.src,
      altText:
        "A person looking frustrated at their computer in front of windows",
      snippet:
        "It is not anger as a feeling that causes problems so much as it is our response to feeling angry. Our behavior tells the tale. As a result of our …",
      pageName: "AngerControl",
    },
    {
      name: "I'm So Angry I Could",
      publicationDate: "November 26, 2018",
      image: bigAngry.src,
      altText: "A person yelling into a phone",
      snippet:
        "Anger, anger, anger… everywhere anger… anger in the streets, violence in our schools, violence towards those of another religion, even anger in our homes. Anger in its extreme becomes hatred …",
      pageName: "Anger",
    },
    {
      name: "Nurturing Fidelity",
      publicationDate: "May 10, 2020",
      image: happy.src,
      altText: "A couple holding eachother in front of a body of water",
      snippet:
        "Counselors frequently work with couples seeking a cure for the pain and destruction that infidelity generally breeds. But counselors would rather help couples before the crisis of infidelity occurs. With …",
      pageName: "Fidelity",
    },
    {
      name: "Discovering the Rewards of Marital Sex",
      publicationDate: "November 26, 2018",
      image: bed.src,
      altText: "Two people holding eachother in bed",
      snippet:
        "Paul Pearsall, Director of Education at the Kinsey Institute for Research, has written an intriguing book, Super Marital Sex, which reveals new ways for married couples to achieve a more …",
      pageName: "MaritalSex",
    },
    {
      name: "Can Supermom be Healthy?",
      publicationDate: "November 26, 2018",
      image: supermom.src,
      altText: "An image of a mother holding their child",
      snippet:
        "Mothers frequently juggle the roles of worker, wife and parent. Balancing the demands of these varied roles has never been easy. But as the nature of each of these jobs …",
      pageName: "Supermom",
    },
  ]);

  const [searched, setSearched] = useState(articles);

  useEffect(() => {
    switch (window.location.hostname) {
      case "localhost" || "127.0.0.2":
        setURL("http://localhost:3000");
        break;
      case "health-associates.herokuapp.com/":
        setURL("https://health-associates.herokuapp.com/");
      case "www.healthassociatesindy.com":
        setURL("https://www.healthassociatesindy.com/");
    }
  }, []);

  const filter = (e) => {
    let newArticles = articles.map((article) => {
      if (e.target.value.length === 0) {
        return;
      } else if (
        article.snippet.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return article;
      }
    });
    newArticles = newArticles.filter((item, i) => item !== undefined);
    newArticles.length > 0 ? setSearched(newArticles) : setSearched(articles);
  };

  const searchToggle = () => {
    if (process.browser) {
      let search = document.querySelector("#search");
      if (search.childNodes[3].id === "eyeglass") {
        let eyeglass = document.querySelector("#eyeglass");
        let input = document.createElement("input");
        let cancelImg = document.createElement("img");
        let line = document.querySelector("#line");

        search.removeChild(eyeglass);

        cancelImg.src = cancelIcon.src;
        cancelImg.style.height = "20px";
        line.style.marginTop = "8px";
        line.style.height = "40px";
        input.id = "input";
        cancelImg.id = "cancel";
        line.id = "line";

        input.addEventListener("keyup", (e) => filter(e));

        cancelImg.addEventListener("click", () => {
          searchToggle();
        });

        search.appendChild(input);
        search.appendChild(cancelImg);
      } else {
        let input = document.querySelector("#input");
        let cancelImg = document.querySelector("#cancel");
        let eyeglass = document.createElement("img");
        let line = document.querySelector("#line");

        line.style.marginTop = "10px";
        line.style.height = "25px";
        eyeglass.src = searchIcon.src;
        eyeglass.style.height = "20px";
        eyeglass.id = "eyeglass";
        eyeglass.style.marginRight = "10px";
        eyeglass.style.marginTop = "10px";

        eyeglass.addEventListener("click", () => {
          searchToggle();
        });

        search.removeChild(input);
        search.removeChild(cancelImg);
        search.appendChild(eyeglass);
      }
    }
  };

  return (
    <div>
      <Navigation style={{ width: "300px", marginLeft: "40px" }} />
      <Title pageName={"Articles"} />
      <br />
      <br />
      <div id="search">
        Articles
        <img
          id="line"
          style={{
            width: "25px",
            marginTop: "8px",
            marginRight: "10px",
          }}
          src={lineIcon.src}
          alt="A vertical line icon to separate text and eyeglass icon"
        />{" "}
        <img
          onClick={() => searchToggle()}
          style={{
            width: "20px",
            marginTop: "8px",
            marginRight: "10px",
          }}
          id="eyeglass"
          src={searchIcon.src}
          alt="An eyeglass icon"
        />
      </div>
      <br />
      <br />
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3> <input onChange={(e) => filter(e)} placeholder="Search Articles..." id='input'/></h3></div> */}
      <div id="pub-holder">
        {searched.map((article, i) => {
          return (
            <div id="pub-card" key={i}>
              <div id="card-container">
                <img src={article.image} alt={article.altText} />
                <div id="pub-text">
                  <h1>{article.name}</h1>
                  <p>{article.snippet}</p>
                  <br />
                  <br />
                  <a id="pub-button">
                    <button
                      onClick={() =>
                        window.location.assign(
                          `${URL}/publications/${article.pageName}`
                        )
                      }
                    >
                      Read Article
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
