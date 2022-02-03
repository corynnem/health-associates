import React, { useState } from "react";
import Link from 'next/link'
import menuIcon from '../assets/menu.png'
import cancelIcon from '../assets/cancel.png'
import searchIcon from '../assets/search.png'
import lineIcon from '../assets/line.png'
import ContactNav from "./ContactNav";


const Navigation = ({ open, setOpen }) => {
    const menuOpen = {
        width: '250px',
        display: 'block'
    }


    const iconOpen = {
        display: 'none',
        height: '50px', position: "absolute", top: '20px', right: '20px'
    }


    
    return (
        <div className="nav-wrapper">
            

            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '90vw', marginLeft: '5%' }}>
                <div>
                    <Link href='/home' className="link"><h5 className="link-tags logo">Health Associates</h5></Link>
                    <h4 className="sub-title ">Counseling and Psychology Service</h4>
                </div>
                <ContactNav style={open ? {} : {}}/>
       

            </div>
            <nav id="menu" style={open ? menuOpen : {}}>
                <img id="cancelIcon" onClick={() => setOpen(false)} src={cancelIcon.src} style={{ height: '30px', position: "absolute", top: '20px', right: '20px', position: 'fixed' }} />

                <div id="right-menu">
                <img id="menuIcon" onClick={() => setOpen(true)} src={menuIcon.src} style={open ? iconOpen : { height: '30px', position: "absolute", top: '20px', left: '20px' }} />
                <div style={open ? {display: 'flex'}: {display: 'none'}}>
                <Link href='/' className="link"><h5 className="link-tags">Home</h5></Link>
                    <Link href='/about' className="link"><h5 className="link-tags">About</h5></Link>
                    <Link href='/services' className="link"><h5 className="link-tags">Services</h5></Link>
                    <Link href='/providers' className="link"><h5 className="link-tags">Providers</h5></Link>
                    <Link href='/contact' className="link"><h5 className="link-tags">Contact Us</h5></Link>
                </div>
                  
                    <div style={{ position: 'absolute', top: '25px', right: '50px' }}>
                        <img src={lineIcon.src} style={{ height: '20px' }} />
                        <img src={searchIcon.src} id="search" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
