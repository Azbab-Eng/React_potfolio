import React,{useEffect,useState} from 'react'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/Icons/menu_24d.svg'
import close from '../../assets/Icons/close.svg'


function Header() {

    const [mode,setMode]=useState(true)
    const handleClick = ()=>{
        const btns = document.querySelectorAll(".left-nav .btn")
        btns.forEach(btn =>{
        btn.addEventListener("click",()=>{
        document.querySelector(".left-nav .active").classList.remove('active')
        btn.classList.add('active')
        
        })
        })
    }

    const toggle =()=>{
        setMode(!mode)
    }
    useEffect(()=>{
        handleClick()
    },[])
// 


  return (
    <>
            <header className="header-con" >
                <Link to="home" smooth={true} offset={-100} duration={400} className="logo">
                    <span className="left">Az</span><span className="right">bab</span><span className="dot">.</span>
                </Link>
                <nav className="nav-con" style={mode?{right:"-100%"}:{right:"0px"}}>
                    <div className="left-nav">
                        <Link to="home" smooth={true} offset={-100} duration={500} className="active btn">Home</Link>
                        <Link to="services" smooth={true} offset={-100} duration={500} className='btn'>Services</Link>
                        <Link to="resume" smooth={true} offset={-100} duration={500} className='btn'>Resume</Link>
                    </div>
                    
                    <div className="right-nav">
                        <Link to="teams" smooth={true} offset={-100} duration={500}>Teams</Link>
                        <Link to="hire" smooth={true} offset={-100} duration={500} className="me">Hire me</Link>
                    </div>
                    
                </nav>
                <button onClick={toggle} className='icon-btn'>
                    <img src={mode?(menu_icon):(close)} className="nav-icon" alt="icon" />
                </button>
                
            </ header >  
    </>
  )
}

export default Header
