import React from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import Footer from './ResusableComponents/Footer'

const OnlineBilling = () => {


  return (
    <div id="online-billing">
      <Navigation   style={{width: '300px', marginLeft: '40px'}} />
      <Title pageName={"Online Billing"} />
      <br />
      <br />
      <br />    
      <div style={{textAlign: 'center', height: '20vh', marginTop: '20px', fontFamily: 'Niramit' , padding: '50px'}}>
            <h1 style={{fontSize: '2.5em'}}>Coming Soon!</h1>
            <p>Health Associates will soon be accepting billing via an online portal.</p>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineBilling;
