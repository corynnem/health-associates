import React from 'react';
import lineIcon from '../assets/line.png'
import phoneIcon from '../assets/phone.png'
import timeIcon from '../assets/time.png'
import atIcon from '../assets/at.png'

const ContactNav = ({  }) => {

    const lineStyles = { height: '80px', opacity: '0.5', marginTop: '-10px', width: '30px', }

    const iconStyles = { height: '30px', marginTop: '10px' , opacity: '0.5'}
    

    return (
        <div id="contact-nav">
                <div style={{ display: 'flex', marginTop: '50px', marginRight: '10px'}}>
                    <div style={{ display: 'flex' }}>
                        <img src={phoneIcon.src} style={iconStyles} className='icon' alt='A phone icon '/>
                        <img src={lineIcon.src} style={lineStyles} className='icon' alt='A line icon to separate phone icon from phone number'/>
                        <div >
                            <p style={{ opacity: '0.7' }}>Phone</p>
                            <p style={{fontSize: '.9em'}}> (317) 844-7489 </p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '50px', }}>
                    <div style={{ display: 'flex' }}>
                        <img src={atIcon.src} style={iconStyles} className='icon' alt='A at symbol (@) icon ' />
                        <img src={lineIcon.src} style={lineStyles} className='icon' alt='A line icon to separate an at symbol (@) icon from email address'/>
                        <div >
                            <p style={{ opacity: '0.7' }}>Email</p>
                            <p style={{fontSize: '.9em'}}> healthassoc320@sbcglobal.net </p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '50px', }}>
                    <div style={{ display: 'flex' }}>
                        <img src={timeIcon.src} style={iconStyles} className='icon'  alt='A clock icon '/>
                        <img src={lineIcon.src} style={lineStyles} className='icon'  alt='A line icon to separate a clock icon from hours health associates is open'/>
                        <div >
                            <p style={{ opacity: '0.7' }}>Hours</p>
                            <p style={{fontSize: '.9em'}}> Monday - Friday 9-5</p>

                        </div>
                    </div>
                </div>
        </div>
    )
}


export default ContactNav;
