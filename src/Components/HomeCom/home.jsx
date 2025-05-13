import React ,{useEffect}from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './home.css'
import myimg from '../../assets/myimg.jpg'
import facebook from '../../assets/Icons/icons8-f.svg'
import instagram from '../../assets/Icons/icons8-i.svg'
import github from '../../assets/Icons/images (11).png'
import twitter from '../../assets/Icons/icons8-twitter.svg'
function Home() {
   window.scroll
  return (

    <>

            <section className="con" name="home" id="con">
                <div className="left-bio">
                    <div className="bio">
                        <h1 className="top">Hello I'm</h1>
                        <h1 className="name">Babalola Abdulazeez</h1>
                        <h1 className="skill">I'm a <span className="skill-desc"><Typewriter 
                        words={["Full-Stack Developer","Automation Specialist","Robotics Engineer"]}
                        loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
                        /></span></h1>
                        <p className="bio-desc">
                        I'm a passionate developer who focuses
                        on creating smart, scalable, and modern 
                        digital solutions.

                        </p>
                    </div>
                    <div className="social">
                        <button>Download CV</button>
                        <div className="social-icon">
                            <a href='https://www.facebook.com/profile.php?id=100086845898808' ><img src={facebook} alt="facebook" /></a>
                            <a href='https://www.instagram.com/azbabdesignhub?utm_source=qr&r=nametag'><img src={instagram} alt="instagram" /></a>
                            <a href='https://github.com/Azbab-Eng/'><img src={github} alt="github" className='git' /></a>
                            <a href='https://x.com/Az_alltech123?t=m53kNAykZbHZZE911mZZjQ&s=09'><img src={twitter} alt="twitter" /></a>
                        </div>
                    </div>
                </div>
                <div className="right-bio">
                    <img src={myimg} alt="" />
                </div>
            </section>
            <div className="expo-con">
                <div className="expo">
                    <h1 className="expo-no">03</h1>
                    <p className="expo-desc">Expirences</p>
                </div>
                <div className="expo">
                    <h1 className="expo-no">06</h1>
                    <p className="expo-desc">Certificates</p>
                </div>
                <div className="expo">
                    <h1 className="expo-no">26</h1>
                    <p className="expo-desc">Projects</p>
                </div>
                <div className="expo">
                    <h1 className="expo-no">09</h1>
                    <p className="expo-desc">Skills</p>
                </div>
            </div>


    </>
  )
}

export default Home
