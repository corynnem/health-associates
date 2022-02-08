import React from 'react'
import Navigation from './Nav/Navigation'
import separator from './assets/separator.png'
import Title from "./ResusableComponents/Title";
import Footer from './ResusableComponents/Footer'


const About = () => {

    return (
        <div id="about">
            <Navigation/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Title pageName={"About"} />
            <img src={separator.src}  alt='A line icon separating the title from the rest of the text on the page'/>
            </div>
            <div style={{marginLeft: '32px'}}>
            <Footer/>
            </div>
            
        </div>
    )
}

export default About