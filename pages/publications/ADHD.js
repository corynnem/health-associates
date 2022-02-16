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
        <div>
            <Navigation/>
            <Title pageName={"ADHD, It's Not Just for Kids Anymore"}/>

            <div className='article'>
              <br/>
                <p>When people think about Attention Deficit Hyperactivity Disorder (ADHD), most envision a hyper little boy, running around in the classroom, unable to sit still. Or they think of a little girl who has trouble paying attention and seems to be in her own little world. In the not too distant past, parents of these children looked forward to the time their children would enter adolescence, believing that these attention deficit children would outgrow this disorder. In fact, medications such as Ritalin were often discontinued at puberty as a result of this belief.</p>
                <br/>
                <p>Although ADHD has become one of the hot topics for study in psychology, there are few descriptive studies dealing with adults who have this disorder. Yet, current research indicates that between 30 and 70 percent of children diagnosed with ADHD continue to have the full syndrome or some significant residual symptoms into adulthood. Adults who think they may fit the diagnosis of ADHD are often self-referred to professionals due to problems with work, school, or family. But it is more common for adults to seek evaluation after their own child has been diagnosed with ADHD.</p>
                <br/>
               <h1>Symptoms of Adult ADHD</h1>
                <p>What might prompt an adult to seek an evaluation for ADHD? Although no two cases are exactly alike, there are a number of similarities among the presenting complaints of adults. These include difficulty finding and keeping jobs; performing below their level of competence at work or in school; inability to concentrate; lack of organization; inability to establish and maintain a routine; forgetfulness; poor memory; losing things; confusion; difficulty persevering on tasks; and problems in maintaining relationships.</p>
                <br/>
                <p>Problems in any one of these areas can be unsettling. Add others and one might feel depressed and miserable. Adults with ADHD often experience several of these complaints and have for many years. It is easy to see how their lives can become disrupted and feel chaotic.</p>
                <br/>
                <p>There are several core symptoms of ADHD — inattention, impulsivity, and hyperactivity. These can be manifested in a variety of ways. Some of the more common ones in adults include being aloof or easily distracted; making careless errors; engaging in frequent impulse buying; talking excessively; or engaging in random or unproductive activity. Associated problems often seen in adults with ADHD include low self-esteem; substance abuse; intense desires, often unsatisfied once they are obtained; and poor estimation of the amount of time needed to complete a given task.</p>
                <br/>
                <h1>What Causes ADHD?</h1>
                <p>While there is no single theory to explain ADHD at present, much of the research points to neurological and genetic sources. One hypothesis suggests that insufficient quantities of certain chemicals in the brain, called neurotransmitters, are responsible. Another hypothesis states that ADHD is related to a problem in the frontal lobe of the brain, the part responsible for executive functions such as planning, initiative, and regulation of behavior. Research also verifies that ADHD runs in families, often being found across three or more generations.</p>
                <br/>
                <h1>Adult ADHD Diagnosis</h1>
                <p>The diagnosis of ADHD for adults can be a difficult process due to other psychiatric disorders or problems that can create difficulties with attention. The most common of these problems are  anxiety, depression, schizophrenia, and the results of abuse.</p>
                <br/>
                <p>In addition, head injuries and certain medical conditions such as hypo- or hyperthyroidism, kidney or liver inefficiency, or poor blood flow to the brain may produce attention deficits. For these reasons, it can take some time to conduct the appropriate interviews and tests (both physical and psychological) to make a definitive diagnosis of ADHD in an adult.</p>
                <br/>
            </div>
            <a href={`${URL}/publications`} id='back-nav'> <img src={back.src} alt='left facing arrow' />Back to Publications</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default ADHD;