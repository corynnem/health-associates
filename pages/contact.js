import React from "react";
import Navigation from "./Nav/Navigation";
import separator from './assets/separator.png'
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";
import Image from "next/image";


const Contact = () => {
    

    return(
        <div>
            <Navigation/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Title pageName={"Contact"} />
            <Image src={separator.src} height={'75px'} width={'80px'}/>
            </div>
            <div style={{marginLeft: '32px'}}>
            <Footer/>
            </div>
        </div>
    )
}



export default Contact;