import React, { useState, useEffect } from 'react';
import Navigation from '../Nav/Navigation'
import Title from './Title'
import back from '../assets/back.png'



const ADHD  = () => {
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
            <Title pageName={"Help!"}/>
            <div className='article'>
                <p>Depression and other emotional problems can usually be greatly relieved by changing mental habits. The following steps need to be repeated hundreds of times (or more) over weeks or months until the job is done. The result is lasting change and much increased happiness.</p>
                <br/>
                <h1><b>How to eliminate a bad habit:</b></h1>
                <ol>
                    <li>Realize what you are doing is wrong.</li>
                    <li>Catch yourself doing it.</li>
                    <li>Don’t do it.</li>
                </ol>
                <br/>
                <h1><b>How to build a good habit:</b></h1>
                <ol>
                    <li>Realize what you should be doing.</li>
                    <li>Practice.</li>
                    <li>Continue until it’s a new habit.</li>
                </ol>
                <br/>
                <h1><b>Common bad habits that need to be eliminated include:</b></h1>
                <p>Guilt, worry, selfishness, suicidal thoughts or actions, name calling, blaming, negative attitudes, controlling others unnecessarily, passivity (”He makes me mad!”), calling yourself bad names, irresponsibility, and exaggerating what is negative. Such exaggeration includes thinking or saying words such as: always, never, everyone, no one, all, none, nobody, and the word just which means only.</p>
                <br/>
                <h1><b>Common good habits that need to be formed include:</b></h1>
                <p>Love, compassion, trustworthiness, honesty, kindness, helpfulness, courtesy, sharing, forgiveness, positive attitudes, responsibility.</p>
                <br/>
                <p>Appreciating the good things around you (the natural world, food, shelter, spouse, friends, clothing, liberty, education, health care, God, love, modern conveniences, etc.) This form of appreciation builds happiness. You may produce as much happiness as you wish.</p>
                <br/>
                <p>Appreciating yourself. This form of appreciation builds self-esteem. You may produce as much self-esteem as you wish.</p>
                <br/>
                <p>Living by Golden Rule # 2: I am responsible for what I think, feel, say, and do. This idea puts personal power and control into your hands so that other people no longer need to control your life.</p>
            </div>
            <br/>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow'  />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default ADHD;