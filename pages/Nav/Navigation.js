import React, { useEffect, useState } from 'react';
import ContactNav from './ContactNav';
import menuIcon from '../assets/menu.png'


const Navigation = () => {
    const [open, setOpen] = useState(false)



    // if you want to use DOM look below
    // if(process.browser) {
    //   console.log(document.querySelector('.left_menu'))
    // }

    const menuOpen = () => {
        let container = document.querySelector('#open-contact')
        if (process.browser) {
            console.log('open', container)


        }
    }

    const menuClose = () => {
        let menu = document.querySelector('nav')
        if (process.browser) {
            console.log('close', menu)
        }
    }

    const toggle = () => {
        setOpen(!open)
        open ? menuClose() : menuOpen()
    }


    return (
        <div>
            <header className="left_menu" >
                <input type="checkbox" id="main_menu" name="main_menu" />
                <span className="logo">Health Associates</span>
                <h4 className="sub-title ">Counseling and Psychology Service</h4>
                <label htmlFor="main_menu">
                    <div className="hamburger hamburger--elastic" type="button" aria-label="Menu" aria-controls="main_menu"> <span className="hamburger-box" onClick={() => toggle()}> <img id="menu-icon" src={menuIcon.src} style={{ height: '30px' }} alt="Navigation icon, click to access navigation bar" /></span> </div>
                </label>
                <div id="open-contact">
                    <div style={{marginTop: '30px', marginRight: '8vw' }}>
                        <h1 id="title">Health Associates</h1>
                        <h4 id='sub-title'>Counseling and Psychology Service</h4>
                    </div>


                    <ContactNav/>
                </div>
                <nav>
                    <ul>
                        <li>
                            {/* <h1 className="logo inner">Health Associates</h1> */}
                        </li>
                        <li> <a href="http://localhost:3000/">Home</a> </li>
                        <li> <a href="http://localhost:3000/about">About</a> </li>
                        <li> <a href="http://localhost:3000/providers">Providers</a> </li>
                        <li> <a href="http://localhost:3000/contact">Contact Us</a> </li>
                        <li id="closed-contact"><ContactNav /></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


export default Navigation;