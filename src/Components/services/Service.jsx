import React from 'react'
import './Service.css'
function Service() {
  return (
    <>

            <main className="services" name="services">
                <div className="service ">
                    <h1 className="no-ser"><span className="no-n">01</span><span className="arrow">1</span></h1>
                    <h1 className="name-ser">Web Developer</h1>
                    <p className="desc-ser">I build responsive, fast, and user-friendly websites using modern web technologies.</p>
                </div>
                <div className="service">
                    <h1 className="no-ser"><span className="no-n">02</span><span className="arrow">2</span></h1>
                    <h1 className="name-ser">Web Automation</h1>
                    <p className="desc-ser">I automate repetitive web tasks to save time, reduce errors, and improve productivity.</p>
                </div>
                <div className="service">
                    <h1 className="no-ser"><span className="no-n">03</span><span className="arrow">3</span></h1>
                    <h1 className="name-ser">Artificial Inteligent</h1>
                    <p className="desc-ser">I use AI to develop intelligent features like chatbots, recommendations, and smart automation.</p>
                </div>
                <div className="service">
                    <h1 className="no-ser"><span className="no-n">04</span><span className="arrow">4</span></h1>
                    <h1 className="name-ser">Internet Of Think</h1>
                    <p className="desc-ser">I work with IoT systems to connect devices and collect real-world data for smarter decisions.</p>
                </div>
            </main>

    </>
  )
}

export default Service
