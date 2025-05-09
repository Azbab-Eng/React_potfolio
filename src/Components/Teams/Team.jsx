import React from 'react'
import myimg from '../../assets/myimg.jpg'
import facebook from '../../assets/Icons/icons8-f.svg'
import instagram from '../../assets/Icons/icons8-i.svg'
import github from '../../assets/Icons/images (11).png'
import twitter from '../../assets/Icons/icons8-twitter.svg'
import p1 from '../../assets/Icons/p (1).jpg'
import p2 from '../../assets/Icons/p (2).jpg'
import p3 from '../../assets/Icons/p (3).jpg'
import './Team.css'
function Team() {
  return (
    <>
          <div className="container" name="teams">
        <div className="wrapper one">
            <div className="card front-face">
                <img src={myimg} className="face1" alt="" />
            </div>
            <div className="card back-face">
                <img src={myimg} className="face2" alt="" />
                <div className="info">
                    <div className="title">AzbabDesignHub</div>
                    <p>User interface designer and <br />front-end developer</p>
                </div>
                <ul>
                      <a className="fab fa-facebook"><img src={facebook} alt="" /></a>
                      <a className="fab fa-twitter"><img src={twitter} alt="" /></a>
                      <a className="fab fa-instagram"><img src={instagram} alt="" /></a>
                    <a className="fab fa-github"><img src={github} alt="" /></a>
                 </ul>
            </div>
        </div>
        <div className="wrapper two">
            <div className="card front-face">
                <img src={p1} className="face1" alt="" />
            </div>
            <div className="card back-face">
                <img src={p1} className="face2" alt="" />
                <div className="info">
                    <div className="title">AzbabDesignHub</div>
                    <p>User interface designer and <br />front-end developer</p>
                </div>
                <ul>
                     <a className="fab fa-facebook"><img src={facebook} alt="" /></a>
                      <a className="fab fa-twitter"><img src={twitter} alt="" /></a>
                      <a className="fab fa-instagram"><img src={instagram} alt="" /></a>
            <a className="fab fa-github"><img src={github} alt="" /></a>
                 </ul>
            </div>
        </div>
        <div className="wrapper three">
            <div className="card front-face">
                <img src={p2} className="face1" alt="" />
            </div>
            <div className="card back-face">
                <img src={p2} className="face2" alt="" />
                <div className="info">
                    <div className="title">AzbabDesignHub</div>
                    <p>User interface designer and <br />front-end developer</p>
                </div>
                <ul>
                    <a className="fab fa-facebook"><img src={facebook} alt="" /></a>
                     <a className="fab fa-twitter"><img src={twitter} alt="" /></a>
                     <a className="fab fa-instagram"><img src={instagram} alt="" /></a>
                     <a className="fab fa-github"><img src={github} alt="" /></a>
                 </ul>
            </div>
        </div>
        <div className="wrapper four">
            <div className="card front-face">
                <img src={p3} className="face1" alt="" />
            </div>
            <div className="card back-face">
                <img src={p3} className="face2" alt="" />
                <div className="info">
                    <div className="title">AzbabDesignHub</div>
                    <p>User interface designer and <br />front-end developer</p>
                </div>
                <ul>
                    <a className="fab fa-facebook"><img src={facebook} alt="" /></a>
                     <a className="fab fa-twitter"><img src={twitter} alt="" /></a>
                     <a className="fab fa-instagram"><img src={instagram} alt="" /></a>
                     <a className="fab fa-github"><img src={github} alt="" /></a>
                 </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team
