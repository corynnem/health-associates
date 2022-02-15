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
            <Title pageName={"Can Supermom be Happy?"}/>
            <div className='article'>
                <p>Mothers frequently juggle the roles of worker, wife and parent. Balancing the demands of these varied roles has never been easy. But as the nature of each of these jobs has expanded, women are finding it harder to handle them successfully. The demands of each of these three roles have become more complex, time consuming and stressful.</p>
                <br/>
                <p>Consider, for instance, what has happened to women in the work force. In the past, when women worked outside the home, it was usually for one reason —— financial need. Today, however, 50 percent of all women with children under six are currently in the workplace and these women are often motivated by more than money. Finding a meaningful job, self-fulfillment and career advancement are among the reasons for their employment. As a result, working frequently requires more time, education and job commitment from women than in the past.</p>
                <br/>
                <p>The role of mothering also has seen significant changes over the years. Mothers have always been the principal providers of emotional nurturing and physical care for their children. But now mothers are asked to be teachers, companions and stimulators for their children as well. These increased demands of motherhood are requiring more and more time from women.</p>
                <br/>
                <p>Finally, the role of wife also has become more complex. At one time a wife was expected to be a homemaker and source of emotional support for her husband. Recently, however, the area of companionship (both emotional and intellectual) has become increasingly more important in marriage. Extra time and effort are needed to meet these changing demands of marriage.</p>
                <br/>
                <p>The result of meeting the requirements of two or three different roles can put enormous pressure on women. These jobs can require more time and energy than many women are capable of giving. Women attempting to complete all their tasks can find themselves physically and emotionally drained and unable to finish their jobs. A common label for this emotional and physical stress is “burnout.” (see box, below)</p>
                <br/>
                <p>Burnout, however, is controllable. There are ways to manage the pressures of women’s numerous jobs and keep them from getting out of hand. The following suggestions may be worth keeping in  mind for “supermoms” who are trying to juggle several demanding roles:</p>
                <ol>
                    <li>Ask for help. Mothers spend much of their time doing for others — children, husband, co-workers. By asking for help with household tasks and childcare, mothers can conserve their energy. Many women, however, have a hard time asking for help without feeling guilty. They feel that they should be able to “do it all.” This is not always necessary or even desirable. Delegating some of the chores to other family members (laundry, cleaning, cooking, etc.) can teach them to be more responsible as well as helping them to be more appreciative of Mom.</li>
                    <li>Try to clarify what tasks are important and realize that you can’t always have it all. Some women, for instance, decide to quit work when their children are small; others want to keep on working. Different women often have very different needs. While some women can manage to work and handle their other roles, others simply can’t.</li>
                    <li>Be aware of your own needs and personality. Have you always needed a lot of private time or have you always juggled many tasks with little time off?</li>
                </ol>
                <br/>
                <p>With creative planning, a little organization and some evaluation of options, most women can find the right balance between their tasks at home and at work. What’s more, if they choose their responsibilities with care and find ways to control their stress levels, they can gain a greater sense of gratification in every area of their life.</p>
                <br/>
                <h1>Burnout</h1>
                <p>Burnout can actually be a health hazard. Studies have shown that individuals who are constantly under stress are more susceptible to heart disease, repeated injury and high blood pressure, diabetes, asthma and allergies.</p>
                <br/>
                <p>Symptoms of undue stress include:</p>
                <ul>
                    <li>constantly feeling as if life is out of control</li>
                    <li>headaches, tiredness, irritability</li>
                    <li>stomach upsets and indigestion</li>
                    <li>tightness in the jaw, neck, shoulders and back</li>
                    <li>difficulty sleeping or sleeping without feeling rested</li>
                    <li>overeating or a lack of appetite</li>
                    <li>a sense of isolation and tiredness</li>
                </ul>
                <br/>
                <p>Even if you’re net a supermom, two or more of these symptoms for an extended time may signal the need for professional help.</p>
                <br/>
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

export default Base;