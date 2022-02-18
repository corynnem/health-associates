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
            <Navigation style={{width: '300px', marginLeft: '40px'}} />
            <Title pageName={"Name"}/>
            <br/>
            <br/>
            <div className='article'>

            </div>
            <br/>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src}  alt='left facing arrow' />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Base;