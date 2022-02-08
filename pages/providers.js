import React from 'react'
import Doctors from './HomeComponents/doctors';
import Navigation from "./Nav/Navigation";
import Title from './ResusableComponents/Title';
import separator from './assets/separator.png'
import Footer from "./ResusableComponents/Footer";
import Image from 'next/image';

const Providers = () => {


    return(
        <div >
            <Navigation/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Title pageName={"Providers"} />
            <Image src={separator.src} height={'75px'} width={'80px'} alt='A line icon separating the title from the rest of the text on the page'/>
            <Doctors/>
            </div>
            <div style={{marginLeft: '32px'}}>
            <Footer/>
            </div>
        </div>
    )
}


export default Providers;