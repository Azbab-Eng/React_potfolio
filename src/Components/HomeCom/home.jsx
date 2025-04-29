import React from 'react'
import './home.css'
import myimg from '../../assets/myimg.jpg'
function Home() {
  return (
    <>

            <section className="con" name="home" id="con">
                <div className="left-bio">
                    <div className="bio">
                        <h1 className="top">Hello I'm</h1>
                        <h1 className="name">Babalola Abdulazeez</h1>
                        <h1 className="skill">I'm <span className="skill-desc">FullStack Developer</span></h1>
                        <p className="bio-desc">
                            Lorem ipsum dolor sit amet consectetur 
                            sit amet consectetur adipisicing 
                            adipisicing similique quod excepturi sit 
                            amet consectetur adipisicing.
                        </p>
                    </div>
                    <div className="social">
                        <button>Download CV</button>
                        <div className="social-icon">
                            <i>F</i>
                            <i>G</i>
                            <i>Y</i>
                            <i>I</i>
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
