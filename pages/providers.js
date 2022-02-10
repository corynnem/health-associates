import React from 'react'
import Doctors from './HomeComponents/doctors';
import Navigation from "./Nav/Navigation";
import Title from './ResusableComponents/Title';
import separator from './assets/separator.png'
import Footer from "./ResusableComponents/Footer";


const Providers = () => {

    const styles = {
        left: { 
            marginLeft: '10px',
            marginBottom: '-50px',
        },
        right: {
            marginLeft: '50px',
        },
        center: {
            marginLeft: '30px',
            marginTop: '-90px',
            lineHeight: '70px'
        }
    }

    return(
        <div >
            <Navigation/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Title pageName={"Providers"} styles={styles}/>
            {/* <img src={separator.src} className="separator"  alt='A line icon separating the title from the rest of the text on the page'/> */}
            <br/>
            <Doctors/>
            </div>
            <div style={{marginLeft: '32px'}}>
            <Footer/>
            </div>
        </div>
    )
}


export default Providers;