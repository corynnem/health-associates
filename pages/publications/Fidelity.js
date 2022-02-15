import React, { useState, useEffect } from 'react';
import Navigation from '../Nav/Navigation'
import Title from './Title'
import back from '../assets/back.png'



const Fidelity  = () => {
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
            <Title pageName={"Nurturing Fidelity"}/>
            <br/>
            <br/>
            <div className='article'>
                <p>Counselors frequently work with couples seeking a cure for the pain and destruction that infidelity generally breeds. But counselors would rather help couples before the crisis of infidelity occurs. With preventive counseling, the outcome is more frequently positive.</p>
                <br/>
                <p>The high percentages of divorce and infidelity prove it’s time to become more aggressive and responsible with behaviors that will nurture your relationship. All too often a partner’s behaviors indicate that the relationship is taken for granted, and that message slowly erodes the marriage.</p>
                <br/>
                <p>Every living thing needs nurturing—from basic food and water to higher requirements of love, kindness, and whatever else a particular species requires. Let’s consider the species of “marriage”.</p>
                <br/>
                <p>You are responsible for the health of your marriage. What do you do to nurture the relationship? The life of a relationship has important needs:</p>
                <br/>
                <ul>
                    <li><b style={{fontFamily: 'Bold'}}>The need for time together.</b> One study revealed that couples spend an average of eleven minutes together in communication weekly. Any business would fail with this limited time for communication! Keep track of how much quality time you spend together. Make dates. Get away from daily pressures. Visit. Communicate.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for play together.</b>  “All work and no play…” makes for a dull relationship! We all learned that old adage in childhood. Find the time to engage in playful activities that you can enjoy together—and make sure they are activities both of you enjoy.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for relaxation together.</b>  NO one wants to be “on” all the time. You need to be comfortable with each other, and to be able to rest and relax without expectations.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for trust. </b> To know you are trusted with your partner’s emotions and well—being helps create intimacy and security. And you need to be able to trust your partner in the same manner. </li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for commitment. </b>  We must be committed to a cause to ride out the difficult times. If your relationship is truly important to you, you will commit physical and emotional energies to keeping it healthy.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need to feel safe together.</b> Learn how to avoid verbally attacking when your partner is sharing with you. Further, though many of us take it for granted, you must be able to feel physically safe with each other. </li>
                    <li><b style={{fontFamily: 'Bold'}}>The need to feel valued; to be special.</b> Do you frequently let your partner know how he/she is valued by you? You must. Just think what you would miss if you no longer had that relationship. Make sure your partner understands how important he/ she is in your life.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need to be a priority.</b> When was the last time you willingly changed a plan to let your partner know he/ she is a priority to you? If everything else comes first, you cannot expect to have a happy relationship.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for affection. </b> A loving hug… a special touch… a knowing look… a warm smile… a gentle laugh—all go a long way. Remember that actions speak louder than words (But don’t forget that the words also are important!). </li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for respect, courtesy and kindness.</b>  Frequently couples give more respect, and more courtesy, to strangers. How do you fare? You cannot expect respect, courtesy and kindness from your partner unless you show those same attitudes in the relationship.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for shared intellectual and spiritual stimulation.</b> These are vital areas of our lives and we want to share them with someone who cares. Talk with your spouse about what’s really important in your life together. </li>
                    <li><b style={{fontFamily: 'Bold'}}>The need for a healthy sexual relationship.</b> A good sexual relationship expresses love and intimacy shared together. Rather than taking sex for granted in your marriage, appreciate your partner’s gift of self. </li>
                    <li><b style={{fontFamily: 'Bold'}}>The need to be pursued.</b>  Let your partner know how interested you are in him/ her. You feel important when your partner truly wants to know how you feel and what you think-without passing judgment. Provide the same “sounding board” for your partner.</li>
                    <li><b style={{fontFamily: 'Bold'}}>The need to feel understood and accepted. </b> We all have times when it seems no one understands or accepts us, and those are lonely times. If you truly want, and expect, acceptance in your relationship, then you must give acceptance. </li>
                </ul>
                <br/>
                <p>All these needs obviously require energy and attention. It takes a lot of energy to learn how to communicate; to express and address your partner’s needs. But the investment of this positive energy has its reward, and that is energy returning to you through a revitalized, healthy relationship.</p>
                <br/>
                <p>Just think of all the energy you give to other areas of your life. Many of these areas are very important; some are not so important. Yet, somehow, you find enough energy and time for them. What about your marriage? If it were an affair, chances are pretty good you’d find the time and energy for the relationship.</p>
                <br/>
                <p>Chances are you wouldn’t be involved in an affair if it didn’t meet needs for you. Think in terms of the new relationship. Now take that kind of energy and re-channel it to nurturing the. growth of  our marital relationship. Your marriage must be that high a priority if it is to succeed.</p>
                <br/>
                <p>Ask yourself, ”Why am I in a marriage? What do I want a marriage to be? What is a marriage for, anyway?” Does your relationship meet your specifications? To what extent—both positive and negative-are you responsible for the results? What are you willing to do to help prevent infidelity?</p>
                <br/>
                <p>The choice is yours. If you don’t know how to accomplish all of this, or if the relationship is not working, seek help through counseling. You owe it to yourself.</p>
                <br/>
            </div>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow'  />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Fidelity;