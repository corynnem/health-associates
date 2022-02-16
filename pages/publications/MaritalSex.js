import React, { useState, useEffect } from 'react';
import Navigation from '../Nav/Navigation'
import Title from './Title'
import back from '../assets/back.png'



const Base  = () => {
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
        <div >
            <Navigation/>
            <Title pageName={"Discovering the Rewards of Marital Sex"}/>
            <div className='article'>
              <br/>
                <p>Paul Pearsall, Director of Education at the Kinsey Institute for Research, has written an intriguing book, Super Marital Sex, which reveals new ways for married couples to achieve a more fulfilling  sexual relationship. Pearsall disagrees with the common assumption that sex in an affair is always more intense and exciting than marital sex. Instead, he claims that no form of extramarital sex can compete with good marital sex.</p>
                <br/>
                <p>“Super marital sex” is the phrase Pearsall uses to define exciting marital sex. He believes that marital sex is maximized by the closeness, trust and familiarity of marriage rather than the adventure, mystery and excitement of an affair.</p>
                <br/>
                <p>The information contained in this book is based on the experiences of a thousand couples who were interviewed over a period of five years. The numerous self-tests, sex assignments, marriage tests and questionnaires contained within the book are designed to encourage discussion and promote understanding between partners. Pearsall’s goal is not only to help couples achieve sexual fulfillment but also experience stronger, healthier marriages.</p>
                <br/>
            </div>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow'/>Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Base;