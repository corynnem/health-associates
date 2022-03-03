import React, { useState, useEffect } from 'react';
import Navigation from '../Nav/Navigation'
import Title from './Title'
import back from '../assets/back.png'



const Reflections  = () => {
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
            <Navigation style={{width: '300px', marginLeft: '40px'}} />
            <Title pageName={'Reflections'}/>

            <div className='article'>
                <p>Many adults have fast-paced, overfilled schedules that consume their time. They overlook their need for affection, individual time, and relaxation. Too often this hurried lifestyle prevents us from taking care of ourselves properly.</p>
                <br/>
                <p>We often push ourselves, our spouses, and our children to be extremely active and to be exceedingly goal-oriented. We often ignore the value of quiet family time – taking a walk with one’s spouse, having a family or marital meeting to discuss a problem, or developing goals. Thinking about our physical and psychological needs is both healthy and revealing. When you take a moment to reflect, you learn more about yourself, your reactions in certain situations, your goals and your dreams. Think about…</p>
                <br/>
                <ul >
                    <li>What memories do you have of your childhood?</li>
                    <li>How do you think of yourself? Are you confident, trustworthy, concerned about others, fearful, self-critical, tense?</li>
                    <li>When in your life were you the happiest?</li>
                    <li>Do your children View you as loving and encouraging or as critical and self-absorbed?</li>
                    <li>When was the last time you and your spouse made love? Was it enjoyable?</li>
                    <li>Do you look happy in recent snapshots of yourself?</li>
                    <li>Do you believe life has been fair to you?</li>
                    <li>Are you aware of goals you have? Have you taken the time to write them down and commit to them?</li>
                    <li>When was the last time someone said he/ she loved you?</li>
                </ul>
                <br/>
                <p>Most of us don&lsquo;t take time to reflect on where we have been, what we have achieved, and where we are going. A few moments alone with our thoughts can result in interesting revelations and insights about ourselves.</p>
            </div>
            <br/>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow'/>Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Reflections;