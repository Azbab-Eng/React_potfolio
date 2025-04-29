import React, { useEffect, useRef } from 'react'
import './Resume.css'

function Resume() {

    useEffect(()=>{
        const list = document.querySelectorAll('.left-res li')
        list.forEach(li => {
            li.addEventListener('click', ()=>{
                document.querySelector('ul .active').classList.remove('active')
                li.classList.add('active')
                console.log(li)
                let detailContent = document.querySelectorAll('.detail-content')
                detailContent.forEach(content => {
                    content.classList.remove('active')
                    content.classList.add('hidden')
                    if (li.id == 'experience') {
                        document.querySelector('.title').textContent = li.textContent
                        document.querySelector('.details #experience').classList.remove('hidden')
                        document.querySelector('.details #experience').classList.add('actice')
                    }
                    if (li.id == 'education') {
                        document.querySelector('.title').textContent = li.textContent
                        document.querySelector('.details #education').classList.remove('hidden')
                        document.querySelector('.details #education').classList.add('actice')
                    }
                    if (li.id == 'skills') {
                        document.querySelector('.title').textContent = li.textContent
                        document.querySelector('.details #skills').classList.remove('hidden')
                        document.querySelector('.details #skills').classList.add('actice')
                    }
                    if (li.id == 'about'){
                        document.querySelector('.title').textContent = li.textContent
                        document.querySelector('.details #about').classList.remove('hidden')
                        document.querySelector('.details #about').classList.add('actice')
                    }
                });
                
                // document.getElementById(sectionId).classList.remove('active')
                // document.getElementById(sectionId).classList.remove('hidden')
            })
        
        });
    },[])
  return (
    <>

            <main className="con-res" name="resume">
                <div className="left-res">
                    <h1 className="why">Why hire me?</h1>
                    <p className="reason">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut odio . </p>
                    <div className="list">
                        <ul> 
                            <li   id="experience" className="active">Experience</li>
                            <li  id="education" >Education</li>
                            <li  id="skills">Skills</li>
                            <li   id="about">About me</li>
                        </ul>
                    </div>
                </div>
                <div className="right-res">
                    <h2>My <span className="title">Experience</span></h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.nostrum iusto beatae.</p>
                    <div className="details">
                        <div id="experience" className="detail-content active">
                            <div className="expe" >
                                <div className="">
                                    <h2><span>2023</span><span>-</span><span>Present</span></h2>
                                    <h2 className="job-title">Programming Tutor</h2>
                                    <p><span></span> Al-Qurraa' College</p>
                                </div>
                                <div className="">
                                    <h2><span>2021</span><span>-</span><span>2022</span></h2>
                                    <h2 className="job-title">Freelance Digital Marketer</h2>
                                    <p><span></span> FHG Tech Com</p>
                                </div>
                                <div className="">
                                    <h2><span>2021</span><span>-</span><span>2022</span></h2>
                                    <h2 className="job-title">WordPress Developer</h2>
                                    <p><span></span> Heliate Community</p>
                                </div>
                                <div className="">
                                    <h2><span>2019</span><span>-</span><span>2021</span></h2>
                                    <h2 className="job-title">Brain Developer With Qur'aan</h2>
                                    <p><span></span>Al-Imaam Group of School</p>
                                </div>
                            </div>                       
                        </div>
                        <div id="education" className="detail-content hidden">
                            <div className="edu" >
                                <div className="">
                                    <h2><span>2025</span><span>-</span><span>Present</span></h2>
                                    <h2 className="job-title">Cycer Security</h2>
                                    <p><span ></span> University Of Ibadan</p>
                                </div>
                                <div className="">
                                    <h2><span>2021</span><span>-</span><span>2023</span></h2>
                                    <h2 className="job-title">Computer Science</h2>
                                    <p><span></span> Federal College Of Animal Health Production and Tecnologies</p>
                                </div>
                                <div className="">
                                    <h2><span>2012</span><span>-</span><span>2018</span></h2>
                                    <h2 className="job-title">Science Department</h2>
                                    <p><span></span> Ansar Ud Deen Secondary School</p>
                                </div>
                                <div className="">
                                    <h2><span>2008</span><span>-</span><span>2012</span></h2>
                                    <h2 className="job-title">Brain Development</h2>
                                    <p><span ></span>UMC Group of School</p>
                                </div>
                            </div> 
                        </div>
                        <div id="skills" className="detail-content hidden">
                            <div className="skl">
                                <p><img src="/images/20240328_214304.jpg" alt="" /><span>Html</span></p>
                                <p><img src="/images/20240328_214315.jpg" alt="" /><span>Css</span></p>
                                <p><img src="/images/20240328_214347.jpg" alt="" /><span>Javascript</span></p>
                                <p><img src="/images/20240328_214418.jpg" alt="" /><span>React</span></p>
                                <p><img src="/images/20240329_120824.jpg" alt="" /><span>NodeJS</span></p>
                                <p><img src="/images/20240329_171407.jpg" alt="" /><span>Python</span></p>
                                <p><img src="/images/20240406_012212.jpg" alt="" /><span>MongoDB</span></p>
                                <p><img src="/images/20240406_012215.jpg" alt="" /><span>ReactNative</span></p>
                                <p><img src="/images/onep5r.jpg" alt="" /><span>El /ectronics</span></p>
                                <p><img src="/images/my-channel.jpeg" alt="" /><span>Arduino</span></p>
                            </div>
                        </div>
                        <div id="about" className="detail-content hidden">
                            <div className="ab">
                                <p><span>Name</span> Babalola A-Azeez</p>
                                <p><span>Phone</span> (+234) 9013562269</p>
                                <p><span>Experience</span> 3+ Years</p>
                                <p><span>Brand</span> AzbabDesignHub</p>
                                <p><span>Nationality</span> Nigerian</p>
                                <p><span>Email</span> babalolaatalltech2@gmail.com</p>
                                <p><span>Freelance</span> Available</p>
                                <p><span>Language</span> English and Arabic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}

export default Resume
