import React, { useState, useEffect } from "react";
import phoneIcon from '../assets/phone.png'
import timeIcon from '../assets/time.png'
import locationIcon from '../assets/location.png'

const Footer = ({ style }) => {
 const iconStyles = { height: '30px', marginTop: '10px' , opacity: '0.5',  filter: 'brightness(0) invert(1)'}
 const textStyles = {marginTop: '15px', marginLeft: '10px', color: 'rgba(255, 255, 255, 0.5)'}

  return (
    <div id="footer" style={style}>
      <div id="map">
        <iframe
        id='iframe'
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/view?zoom=17&center=39.9225%2C-86.1587&key=AIzaSyCYczkfIKGXw5CVtYg342ctiG4df9R6BKM"
        ></iframe>
      </div>
      <div id="contact">
          <div style={{ display: 'flex', marginTop: '50px', }} >
                    <div style={{ display: 'flex' }}>
                        <img src={locationIcon.src} style={iconStyles} className='icon' alt='A location icon '/>
                        <div style={textStyles}>
                            <p>9240 N Meridian St Ste 320, Indianapolis, IN 46260</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '50px', marginRight: '10px'}}>
                    <div style={{ display: 'flex' }}>
                        <img src={phoneIcon.src} style={iconStyles} className='icon' alt='A phone icon '/>
                        <div style={textStyles}>
                            <p> (123) - 456 - 7890 </p>
                        </div>
                    </div>
                </div>
               
                <div style={{ display: 'flex', marginTop: '50px', }}>
                    <div style={{ display: 'flex' }}>
                        <img src={timeIcon.src} style={iconStyles} className='icon'  alt='A clock icon '/>
                        <div style={textStyles}>
                            <p> Monday - Friday 9-5</p>

                        </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
