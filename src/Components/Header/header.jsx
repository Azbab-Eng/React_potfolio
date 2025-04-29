import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  return (
    <>
            <header className="header-con">
                <Link to="home" smooth={true} offset={0} duration={700} className="logo">
                    <span className="left">Az</span><span className="right">bab</span><span className="dot">.</span>
                </Link>
                <nav className="nav-con">
                    <div className="left-nav">
                        <Link to="home" smooth={true} offset={0} duration={700} className="active">Home</Link>
                        <Link to="services" smooth={true} offset={-150} duration={700}>Services</Link>
                        <Link to="resume" smooth={true} offset={-150} duration={700}>Resume</Link>
                    </div>
                    <div className="right-nav">
                        <div className="right-nav">
                            <Link to="teams" smooth={true} offset={-140} duration={700}>Teams</Link>
                            <Link to="hire" smooth={true} offset={-140} duration={700} className="me">Hire me</Link>
                        </div>
                    </div>
                </nav>
                <img src="/images/hamburger-menu.svg" className="nav-icon" alt="" />
            </ header >  
    </>
  )
}

export default Header
