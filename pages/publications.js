import React, { useState, useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import reflections from "./Optimum/photos/reflections.jpeg";
import adhd from "./Optimum/photos/adhd.jpg";
import help from "./Optimum/photos/help.jpg";
import kid from "./Optimum/photos/kid.jpg";
import happy from "./Optimum/photos/happy-couple.jpg";
import unhappy from "./Optimum/photos/unhappy-couple.jpg";
import sports from "./Optimum/photos/sports.jpg";
import anger from "./Optimum/photos/anger.jpg";
import bigAngry from "./Optimum/photos/mucho-angry.jpg";
import test from "./Optimum/photos/home-test.jpg";
import sleep from "./Optimum/photos/sleep.jpg";
import bed from "./Optimum/photos/in-bed.jpg";
import supermom from "./Optimum/photos/supermom.jpg";
import lineIcon from './assets/line.png'
import searchIcon from './assets/search.png'
import cancelIcon from './assets/cancel.png'



const Publications = () => {
  const [articles] = useState([
    {
      name: "Reflections",
      publicationDate: "May 10, 2020",
      snippet:
        "Many adults have fast-paced, overfilled schedules that consume their time. They overlook their need for affection, individual time, and relaxation. Too often this hurried lifestyle prevents us from taking care …",
      image: reflections.src,
      component: "",
    },
    {
      name: "ADHD, It's Not Just For Kids Anymore",
      publicationDate: "May 10, 2020",
      image: adhd.src,
      snippet:
        "When people think about Attention Deficit Hyperactivity Disorder (ADHD), most envision a hyper little boy, running around in the classroom, unable to sit still. Or they think of a little …",
      component: "",
    },
    {
      name: "Help!",
      publicationDate: "May 10, 2020",
      image: help.src,
      snippet:
        "Depression and other emotional problems can usually be greatly relieved by changing mental habits. The following steps need to be repeated hundreds of times (or more) over weeks or months …",
      component: "",
    },
    {
      name: "Do Less For Your Kids",
      publicationDate: "November 26, 2018",
      image: kid.src,
      snippet:
        "Parents clearly want what is best for their children. But often, in our modern, high-tech, materialistic world, we become sidetracked with giving our children what is stimulating, what is pleasurable, … ",
      component: "",
    },
    {
      name: "Nurturing Fidelity",
      publicationDate: "May 10, 2020",
      image: happy.src,
      snippet:
        "Counselors frequently work with couples seeking a cure for the pain and destruction that infidelity generally breeds. But counselors would rather help couples before the crisis of infidelity occurs. With …",
      component: "",
    },
    {
      name: "What's Happening to Us?",
      publicationDate: "November 26, 2018",
      image:  unhappy.src,
      snippet:
        "Infidelity-~being sexually unfaithful to your partner. What labels or images does that word bring to your mind? Disloyal? Unfaithful? Joy? Deceit? Lying? Guilt? Excitement? Cheap love? Anxiety?  Lost dreams? Closeness? …",
      component: "",
    },
    {
      name: "Anger In Sports",
      publicationDate: "November 26, 2018",
      image: sports.src,
      snippet:
        "Anger and overt acts of violence are becoming an increasing concern in sports today, not just at the college and professional level but also among younger students. Even amateur adult …",
      component: "",
    },
    {
      name: "Controlling Anger",
      publicationDate: "November 26, 2018",
      image: anger.src,
      snippet:
        "It is not anger as a feeling that causes problems so much as it is our response to feeling angry. Our behavior tells the tale. As a result of our …",
      component: "",
    },
    {
      name: "I'm So Angry I Could",
      publicationDate: "November 26, 2018",
      image: bigAngry.src,
      snippet:
        "Anger, anger, anger… everywhere anger… anger in the streets, violence in our schools, violence towards those of another religion, even anger in our homes. Anger in its extreme becomes hatred …",
      component: "",
    },
    {
      name: "Using Home Medical Tests",
      publicationDate: "November 26, 2018",
      image: test.src,
      snippet:
        "Many people are discovering that home medical tests can save time, money and energy over conventional office or laboratory visits. Although home tests are not meant to be a substitute …",
      component: "",
    },
    {
      name: "Getting a Good Night's Sleep",
      publicationDate: "November 26, 2018",
      image: sleep.src,
      snippet:
        "Everyone has an occasional sleepless night. But for 20 million Americans, the frustration of chronic insomnia is a big problem. The gimmicks that work for the person with mild sleep …",
      component: "",
    },
    {
      name: "Discovering the Rewards of Marital Sex",
      publicationDate: "November 26, 2018",
      image: bed.src,
      snippet:
        "Paul Pearsall, Director of Education at the Kinsey Institute for Research, has written an intriguing book, Super Marital Sex, which reveals new ways for married couples to achieve a more …",
      component: "",
    },
    {
      name: "Can Supermom be Healthy?",
      publicationDate: "November 26, 2018",
      image: supermom.src,
      snippet:
        "Mothers frequently juggle the roles of worker, wife and parent. Balancing the demands of these varied roles has never been easy. But as the nature of each of these jobs …",
      component: "",
    },
  ]);
  const [URL, setURL] = useState('')
  const [searched, setSearched] = useState(articles)

  useEffect(() => {
  switch(window.location.hostname) {
    case 'localhost' || '127.0.0.2':
        setURL('http://localhost:3000') 
        break;
    case 'health-associates.herokuapp.com/':
        setURL('https://health-associates.herokuapp.com/');

}
}, [])

const filter = (e) => {
    console.log(e.target.value)
    let newArticles =  articles.map((article) => {
            if(e.target.value.length === 0) {
                return
            } else  if(article.snippet.toLowerCase().includes(e.target.value.toLowerCase())) {
                return article
            } 
    })
    newArticles = newArticles.filter((item, i) => item !== undefined)
    newArticles.length > 0  ?  setSearched(newArticles) :   setSearched(articles)
}


const searchToggle = () => {
    if(process.browser) {
        let search = document.querySelector('#search')
        console.log(search.childNodes)
        if(search.childNodes[3].id === 'eyeglass') {
            let eyeglass = document.querySelector('#eyeglass')
            let input = document.createElement('input')
            let cancelImg = document.createElement('img')
            let line = document.querySelector('#line')

            search.removeChild(eyeglass)

            cancelImg.src = cancelIcon.src
            cancelImg.style.height = '20px'
            line.style.marginTop = '8px'
            line.style.height = '40px'
            input.id = 'input'
            cancelImg.id = 'cancel'
            line.id = 'line'

            input.addEventListener('keyup', (e) =>   filter(e) )

            cancelImg.addEventListener('click', () => {
                searchToggle()
            })


            search.appendChild(input)
            search.appendChild(cancelImg)
        } else {
            let input = document.querySelector('#input')
            let cancelImg = document.querySelector('#cancel')
            let eyeglass = document.createElement('img')
            let line = document.querySelector('#line')

            line.style.marginTop = '10px'
            line.style.height = '25px'
            eyeglass.src = searchIcon.src
            eyeglass.style.height = '20px'
            eyeglass.id = 'eyeglass'
            eyeglass.style.marginRight = '10px'
            eyeglass.style.marginTop = '10px'

            eyeglass.addEventListener('click', () => {
                searchToggle()
            })
            
            search.removeChild(input)
            search.removeChild(cancelImg)
            search.appendChild(eyeglass)
        }
    }
  };



  return (
    <div>
      <Navigation />
      <Title pageName={"Publications"} />
      <br />
      <br />
      <div id='search'>  
        Optimum
      <img
                  id="line"
                  style={{
                    width: "25px",
                    marginTop: "8px",
                    marginRight: "10px",
                  }}
                  src={lineIcon.src}
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
                /></div>
                <br/>
               <br/>
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3> <input onChange={(e) => filter(e)} placeholder="Search Articles..." id='input'/></h3></div> */}
      <div id="pub-holder">
        {searched.map((article, i) => {
          return (
            <div  id="pub-card">
              <div id='card-container'>
                <img  src={article.image} />
                <div id="pub-text">
                  <h1>{article.name}</h1>
                  <p>{article.snippet}</p>
                  <br/>
                  <br/>
                  <button
                id="pub-button"
                onClick={() => window.location.assign(`${URL}/services`)}
              >
                Read Article
              </button>
                </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
