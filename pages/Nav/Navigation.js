import React, { useState } from "react";
import Link from 'next/link'
import { Breadcrumb, Input, Space } from 'antd';
import menuIcon from '../assets/menu.png'
import cancelIcon from '../assets/cancel.png'
import searchIcon from '../assets/search.png'
import lineIcon from '../assets/line.png'

const { Search } = Input;

console.log(cancelIcon)

const Navigation = ({ open, setOpen }) => {
    const menuOpen = {
        width: '250px',
        display: 'block'
    }


    const iconOpen = {
        display: 'none',
        height: '50px', position: "absolute", top: '20px', right: '20px'
    }


    const onSearch = () => {
        // let menu = document.getElementById('menu')
        // console.log(menu)
        // let main = document.querySelector('#main')
        // let mi = document.querySelector('#menuIcon')
        // menu.style.width = '0px'
        // main.style.opacity = '1'
        // menu.style.display = 'none'
        // main.style.display = 'block'
        // mi.style.display = 'block'
    }


    return (
        <div className="nav-wrapper">
            <img id="menuIcon" onClick={() => setOpen(true)} src={menuIcon.src} style={open ? iconOpen : { height: '50px', position: "absolute", top: '20px', right: '20px' }} />
        
        
            <div style={{ position: 'fixed', right: '10px'}} >
            <Link href='/home' className="link"><h5 className="link-tags logo">Health Associates</h5></Link>
                <Breadcrumb>
                        <a href="tel:3175178298"> (123) - 456 - 7890 </a>
                    <Breadcrumb.Separator/>
                    <a href=""> office@health-associates.org</a>
                </Breadcrumb>
            </div>
            <nav id="menu" style={open ? menuOpen : {}}>
                <img id="cancelIcon" onClick={() => setOpen(false)} src={cancelIcon.src} style={{ height: '30px', position: "absolute", top: '20px', right: '20px', position: 'fixed' }} />

                <div id="right-menu">
                    <Link href='/' className="link"><h5 className="link-tags">Home</h5></Link>
                    <Link href='/about' className="link"><h5 className="link-tags">About</h5></Link>
                    <Link href='/services' className="link"><h5 className="link-tags">Services</h5></Link>
                    <Link href='/providers' className="link"><h5 className="link-tags">Providers</h5></Link>
                    <Link href='/contact' className="link"><h5 className="link-tags">Contact Us</h5></Link>
                    <div style={{ position: 'absolute', top: '25px', right: '50px' }}>
                            <img src={lineIcon.src} style={{height: '20px'}}/>
                            <img src={searchIcon.src} id="search"/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
