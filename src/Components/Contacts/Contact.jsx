import React, { useState } from 'react'
import './Contact.css'
import myimg from '../../assets/myimg.jpg'
import loca from '../../assets/Icons/location.svg'
import num from '../../assets/Icons/person_2.svg'
import send from '../../assets/Icons/send_24d.svg'
function Contact() {
    const [result , setResult] = useState("")

    const onSubmit = async (event)=>{
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)
        console.log(formData)
        formData.append("access_key","02e65168-42d2-42b5-8341-3f39b0c5de95")
        const response = await fetch("https://api.web3forms.com/submit",{
            method:"POST", body:formData
        }).then((response)=>response.json())
        console.log(response.success)
        console.log("Checked")
        if(response.success){
            console.log("Successs",response)
            setResult(response.message)
            console.log(response.message)
            event.target.reset()
        }else{
            console.log("Error",response.error)
            setResult(response.message)
        }
    }
  return (
    <>
            <main className="contact" name="hire">
                <div className="ct-left">
                    <h1>Let's work together</h1>
                    <p>I’m open to collaboration—let’s discuss how 
                        I can bring value to your project or team.</p>
                    <form  onSubmit={onSubmit}>
                        <div className="dts">
                            <input type="email" name="email" id="" placeholder="Email address" />
                            <input type="text" name="phone" id="" placeholder="Phone number" required/>
                        </div>
                        <div className="slt">
                            <select name="course" id="" className="slt-dt">
                                <option value="Select a service">Select a service</option>
                                <option value="Frontend Role">Frontend Role</option>
                                <option value="Backend Role">Backend Role</option>
                                <option value="Fullstack Role">Fullstack Role</option>
                                <option value="AI Engineer">AI Engineer</option>
                                <option value="Electronic Engineer">Electronic Engineer</option>
                            </select>
                        </div>
                        <div className="txt">
                            <textarea name="message" id="" placeholder="Type your Message here"></textarea>
                        </div>
                        <button>Send message</button>
                    </form>
                    <p>{result}</p>
                </div>
                <div className="ct-right">
                    <div className="ct-box">
                        <img src={num} alt="" />
                        <div className="ads">
                            <p>Phone</p>
                            <p>(+234) 9013562269</p>
                        </div>
                    </div>
                    <div className="ct-box">
                        <img src={send} alt="" />
                        <div className="ads">
                            <p>Email</p>
                            <p>moshaallaah000@gmail.com</p>
                        </div>
                    </div>
                    <div className="ct-box">
                        <img src={loca} alt="" />
                        <div className="ads">
                            <p>Address</p>
                            <p>Oluyole, Apata, Ibadan,Oyo state, Nigeria</p>
                        </div>
                    </div>
                </div>
            </main>
 
    </>
  )
}

export default Contact
