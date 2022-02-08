import React from 'react';
import background from '../pages/assets/background.jpeg'
import Doctors from './HomeComponents/doctors';
import WaysToHelp from './HomeComponents/WaysToHelp';
import separator from './assets/separator.png'
import Footer from './ResusableComponents/Footer';



const App = () => {



    return (
        <div>
            <div id='home'>
                <div id="main">
                    <img id="background" src={background.src} alt="Photo of stones being balanced atop one another in front of a forest" />
                    <div id="text"> 
                        <h1 >Welcome to Health Associates! </h1>
                        <p>Health Associates is a group of mental health professionals dedicated to the well being of our clients. We approach psychological health utilizing various treatment methods, including individual, family and group counseling, cognitive and behavioral methods, biofeedback training, nutritional guidance, exercise recommendations, and stress management techniques. Please browse this website to learn valuable information about our services.</p>
                    </div>
                </div>
                <div style={{marginTop: '10vh', textAlign: 'center', marginBottom: '20vh',  }}>
                <WaysToHelp/>
                </div>
                <div style={{marginTop: '10vh', textAlign: 'center', }}>
                    <h1>Providers</h1>
                    <img src={separator.src}  alt='A line icon separating the title from the rest of the text on the page'/>
                <Doctors/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default App;
