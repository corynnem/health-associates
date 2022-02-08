import React from 'react';
import lineIcon from '../assets/line.png'
import phoneIcon from '../assets/phone.png'
import timeIcon from '../assets/time.png'
import atIcon from '../assets/at.png'
import Image from 'next/image'

const ContactNav = ({  }) => {

    const lineStyles = { height: '80px', opacity: '0.5', marginTop: '-10px', width: '30px', }

    const iconStyles = { height: '30px', marginTop: '10px' , opacity: '0.5'}
    

    return (
        <div id="contact-nav">
                <div style={{ display: 'flex', marginTop: '50px', marginRight: '10px'}}>
                    <div style={{ display: 'flex' }}>
                        <img src={phoneIcon.src} style={iconStyles} className='icon' />
                        <img src={lineIcon.src} style={lineStyles} className='icon' />
                        <div >
                            <p style={{ opacity: '0.7' }}>Phone</p>
                            <p> (123) - 456 - 7890 </p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '50px', }}>
                    <div style={{ display: 'flex' }}>
                        <img src={atIcon.src} style={iconStyles} className='icon' />
                        <img src={lineIcon.src} style={lineStyles} className='icon' />
                        <div >
                            <p style={{ opacity: '0.7' }}>Email</p>
                            <p> email@doman.com</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '50px', }}>
                    <div style={{ display: 'flex' }}>
                        <img src={timeIcon.src} style={iconStyles} className='icon' />
                        <img src={lineIcon.src} style={lineStyles} className='icon'/>
                        <div >
                            <p style={{ opacity: '0.7' }}>Hours</p>
                            <p> Monday - Friday 9-5</p>

                        </div>
                    </div>
                </div>
        </div>
    )
}


export default ContactNav;
