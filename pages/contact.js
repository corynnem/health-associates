import React from "react";
import Navigation from "./Nav/Navigation";
import separator from './assets/separator.png'
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";



const Contact = () => {
    

    return(
        <div>
            <Navigation/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Title pageName={"Contact"} />
            <img src={separator.src} style={{ width: '75px'}}/>
            </div>
            <div style={{marginLeft: '32px'}}>
            <Footer/>
            </div>
        </div>
    )
}



export default Contact;