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
            <Title pageName={"Anger In Sports"}/>
            <br/>
            <br/>
            <div className='article'>
                <p>Anger and overt acts of violence are becoming an increasing concern in sports today, not just at the college and professional level but also among younger students. Even amateur adult sports have experienced this problem.</p>
                <br/>
                <p>Concerns about violence have not been confined to the United States. In fact, recently violence and rioting related to soccer matches in England and parts of Europe and South America have resulted in the deaths and injuries of a significant number of fans.</p>
                <br/>
                <p>Some sports seem to elicit or promote violent acts among the players and spectators more than others. For example, it is uncommon to see acts of violence at a tennis match while it is common to see violence in contact sports such as hockey and football, both by the players and spectators.</p>
                <br/>
                <h1>Causes of Violence</h1>
                <p>There are varying opinions about the causes of violence in sports. Some individuals allege that at the professional level in hockey and football it is promoted by the league owners and coaches to improve attendance. Certainly in auto racing, it is common to see highlight clips that involve violent crashes  where drivers are frequently injured or killed. Professional wrestling centers most of its promotional activities around violent threats which the participants hurl back and forth.</p>
                <br/>
                <h1>Is This Affecting Society?</h1>
                <p>At issue is whether violence in sports has promoted an increase in everyday violence or crime that involves violent activity. While there is no research to suggest that it does, there is a growing body of research to indicate that adolescents and pre—adolescents who are emotionally unstable may be adversely affected by participation in Violent sports. (This is in contrast to the fact that more stable individuals are probably not affected and probably benefit from participation in physically aggressive activities.)</p>
                <br/>
                <h1 style={{fontSize: '2em', textAlign: 'center'}}> &lsquo;Some sports seem to elicit or promote violent acts …&rsquo;</h1>
                <p>are surprised by the way the sport is played in this country. Information shows that youth teams in Eastern Europe are more successful than similar teams in the US, suggesting that emphasizing technique over aggression may be to the advantage of the team.</p>
                <br/>
                <h1>Referees Can Control Violence</h1>
                <p>In general, particularly in youth and collegiate sports, the level of violence tends to be dictated by the referee. Referees need to focus on the beginning of a sporting contest if the violence level and aggression level need to be controlled.</p>
                <br/>
                <p>In most team sports involving aggressive physical contact, the players will take their one from the early reactions of the referee. If referees quickly call fouls and award penalty shots, free kicks or yardage to an opponent, the level of aggression is held in check. Once a pattern of violence has been established, it is far more difficult for the referee to get the game under control.</p>
                <br/>
                <h1>Parents Have a Responsibility</h1>
                <p>In order to ensure that referees pay attention to these types of guidelines, parents and coaches must agree that priority be given to controlling aggression and violence within the league structure. This should be decided on a seasonal basis and monitored and enforced by individuals who are aware of the negative potential of the situation. For many years it was assumed that physical activities, particularly sporting activities, were beneficial to children and adolescents. Some educators and sports psychologists have now reached the position where they believe that certain types of physical activities have become so violent and aggressive that they have a negative effect. This may be particularly true for less stable individuals, although it affects everyone.</p>
                <br/>
                <p>Parents should monitor the types of activities which they allow their children to participate in and have the courage to withdraw them from anything which could be harmful or damaging. Parents should also evaluate the injury potential and long—term effects of injuries which could be incurred in a sport. If necessary, they should find alternative sports or leagues in which their children can participate.</p>
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