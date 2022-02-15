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
            <Title pageName={"Getting a Good Nights Sleep"}/>
            <div className='article'>
                <p>Everyone has an occasional sleepless night. But for 20 million Americans, the frustration of chronic insomnia is a big problem. The gimmicks that work for the person with mild sleep problems (reading, warm milk, a back rub) don’t relieve the truly troubled sleeper. Physicians annually write more than 25 million sleeping pill prescriptions.</p>
                <br/>
                <p>The old saying, “It doesn’t kill you; it just ruins your life,” is all too true for insomniacs. Victims of insomnia may exhibit the same symptoms of joylessness and apathy as those suffering from depression. Because of this, insomnia and depression can be hard to distinguish from one another.</p>
                <br/>
                <p>The clinical acronym for insomnia is DIMS (Disorders of Initiating and Maintaining Sleep). Most people think of insomnia as the complete inability to fall asleep. But insomnia can also occur after falling asleep at bedtime. Some individuals actually go to sleep at a normal hour, then awaken during the night and find it difficult or impossible to return to sleep. They often suffer from the same fatigue, depression and anxiety as those who get no sleep at all.</p>
                <br/>
                <h1>“Physicians annually write more than 25 million sleeping pill prescriptions.”</h1>
                <br/>
                <p>Although there is no magic cure for insomnia, in most cases better sleep patterns can be achieved. Quentin Regestein, M.D., head of the Harvard Medical School Sleep Clinic, estimates that 85 percent of even the most severe insomniacs can see significant improvement with a change in lifestyle. If a visit to your doctor has ruled out any medical disorders that could affect your sleep, a careful review of lifestyle could be helpful. The following are some questions designed to pinpoint behaviors that could interfere with sleep:</p>
                <ul>
                    <li>Is the bedroom dark enough to prevent sunlight or other light from disturbing you?</li>
                    <li>Is the bedroom quiet enough to keep you from being awakened?</li>
                    <li>Are the room temperature and bed clothing comfortable?</li>
                    <li>Are activities such as business phone calls and writing conducted away from the bedroom? (Many sleep specialists suggest that the bed be used primarily for sleep and sex.)</li>
                    <li>Do you abstain from stimulants such as caffeine, nicotine and sugar (especially late at night)?</li>
                    <li>Are your meals regular and are late snacks eliminated? Does the evening meal take place three to five hours before bedtime?</li>
                    <li>Are projects completed one to two hours before bedtime?</li>
                    <li>If you exercise, does this take place at least three hours prior to bedtime? (Light to moderate exercise early in the evening can reduce muscular tension and promote sleep.)</li>
                    <li>Is late night TV viewing limited?</li>
                    <li>Is daytime napping eliminated?</li>
                    <li>Is excess alcohol consumption avoided?</li>
                </ul>
                <br/>
                <p>Individuals with sleep problems often have a family history of this condition, resulting in a predisposition to sleep problems. This does not mean that these individuals are doomed to insomnia. It does mean that the condition needs careful management to ensure regular, restful sleep.</p>
                <br/>
                <p>If you decide that your lifestyle has room for improvement, give yourself enough time to adapt to the changes. A night or two won’t help much. But, if no improvement occurs in two weeks, a visit to a trained professional is the next step.</p>
            </div>
            <br/>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Base;