import React, { useState } from 'react'
import './Contact.css'
import myimg from '../../assets/myimg.jpg'
function Contact() {
    const [result , setResult] = useState("")

    const onSubmit = async (event)=>{
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)
        setResult("Sending2....")
        console.log(formData)
        formData.append("access_key","02e65168-42d2-42b5-8341-3f39b0c5de95")
        setResult("Sending3....")
        const response = await fetch("https://api.web3forms.com/submit",{
            method:"POST", body:formData
        }).then((response)=>response.json())
        setResult("Sending Successfull")
        console.log(response.success)
        console.log("Checked")
        if(response.success){
            console.log("Successs",response)
            setResult(res.message)
            console.log(res.message)
            setResult("Sending5....")
            event.target.reset()
        }else{
            console.log("Error",response)
            setResult("Sending6....")
            setResult(res.message)
        }
    }
  return (
    <>
            <main class="contact" name="hire">
                <div class="ct-left">
                    <h1>Let's work together</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus cum eos nihil repudiandae quidem eligendi</p>
                    <form  onSubmit={onSubmit}>
                        <div class="dts">
                            <input type="text" name="name" id="" placeholder="FirstName" />
                            <input type="text" name="name" id="" placeholder="LastName" />
                            <input type="email" name="email" id="" placeholder="Email address" />
                            <input type="text" name="phone" id="" placeholder="Phone number" />
                        </div>
                        <div class="slt">
                            <select name="course" id="" class="slt-dt">
                                <option value="Select a service">Select a service</option>
                                <option value="Frontend Role">Frontend Role</option>
                                <option value="Backend Role">Backend Role</option>
                                <option value="Fullstack Role">Fullstack Role</option>
                                <option value="AI Engineer">AI Engineer</option>
                                <option value="Electronic Engineer">Electronic Engineer</option>
                            </select>
                        </div>
                        <div class="txt">
                            <textarea name="message" id="" placeholder="Type your Message here"></textarea>
                        </div>
                        <button>Send message</button>
                    </form>
                    <p>{result}</p>
                </div>
                <div class="ct-right">
                    <div class="ct-box">
                        <img src={myimg} alt="" />
                        <div class="ads">
                            <p>Phone</p>
                            <p>(+234) 9013562269</p>
                        </div>
                    </div>
                    <div class="ct-box">
                        <img src={myimg} alt="" />
                        <div class="ads">
                            <p>Email</p>
                            <p>moshaallaah000@gmail.com</p>
                        </div>
                    </div>
                    <div class="ct-box">
                        <img src={myimg} alt="" />
                        <div class="ads">
                            <p>Address</p>
                            <p>Ologuneru Ibadan,Oyo state, Nigeria</p>
                        </div>
                    </div>
                </div>
            </main>
 
    </>
  )
}

export default Contact
