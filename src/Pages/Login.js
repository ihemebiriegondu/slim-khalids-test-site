import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import bigLogo from '../images/biglogo.png'

import Participants from "../JSON/Participants.json"

import "../css/login.css"


const Login = () => {

    if (localStorage.getItem("attempt") === null) {
        localStorage.setItem("attempt", 2)
    } else if (localStorage.getItem("attempt") === 0) {
        localStorage.setItem("attempt", -3);
    }
    

    
    const validateLoginForm = (event) => {

        const email = document.getElementById("email");
        const password = document.getElementById("password");

        let isEmail = false;

        for (var i = 0; i < Participants.length; i++) {
            if (Participants[i].Participant.email === email.value) {
                //alert(Participants[i].Participant.name)
                isEmail = true;

                localStorage.setItem("participantName", Participants[i].Participant.name)

                //email for removal in instruction page
                localStorage.setItem("userEmail", email.value)
                //let participantName = localStorage.getItem("participantName")
            }
        }

        if (localStorage.getItem("attempt") > 0) {
            if (isEmail === false && password.value !== "12345") {
                event.preventDefault();
                document.querySelector(".email-form-floating").classList.add("invalid-form")
                email.classList.add("is-invalid")
                document.querySelector(".password-form-floating").classList.add("invalid-form")
                password.classList.add("is-invalid")
            } else if ((isEmail === false) && password.value === "12345") {
                event.preventDefault();
                document.querySelector(".email-form-floating").classList.add("invalid-form")
                email.classList.add("is-invalid")
                document.querySelector(".password-form-floating").classList.remove("invalid-form")
                password.classList.remove("is-invalid")
            } else if ((password.value !== "12345") && isEmail === true) {
                event.preventDefault();
                document.querySelector(".password-form-floating").classList.add("invalid-form")
                password.classList.add("is-invalid")
                document.querySelector(".email-form-floating").classList.remove("invalid-form")
                email.classList.remove("is-invalid")
            }
            else if (isEmail === true && password.value === "12345") {
                document.getElementById("loginform").action = "/pickuniversity";

                document.querySelector(".email-form-floating").classList.remove("invalid-form")
                email.classList.remove("is-invalid")
                document.querySelector(".password-form-floating").classList.remove("invalid-form")
                password.classList.remove("is-invalid")
            }
        } else {
            event.preventDefault();
            document.querySelector(".email-form-floating").classList.add("invalid-form")
            email.classList.add("is-invalid")
            document.querySelector(".password-form-floating").classList.add("invalid-form")
            password.classList.add("is-invalid")
        }

    }

    return (
        <div className='mainLoginPage'>
            <img src={bigLogo} alt="" className='mainLoginImg' />
            <div className='login-backdrop'>
                <div className='mainForm'>
                    <form className='shadow' id='loginform' action='' onSubmit={(event) => validateLoginForm(event)}>
                        <h3 className='mb-5'>Login to take the weekly test for the week of Sept 15</h3>
                        <div className="form-floating mb-5 email-form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email address</label>
                            <p className='ps-3 text-danger invalid-feedback'>*Invalid email address</p>
                        </div>

                        <div className="input-group password-form-floating">
                            <span className="input-group-text" id='eye-container' onClick={() => {
                                let eyeContainer = document.getElementById("eye-container");

                                eyeContainer.classList.toggle("showPassword");

                                if (eyeContainer.classList.contains("showPassword")) {
                                    document.querySelector(".eyeOpen").classList.add("d-none");
                                    document.querySelector(".eyeClose").classList.remove("d-none");
                                    document.getElementById("password").type = "text"
                                } else {
                                    document.querySelector(".eyeOpen").classList.remove("d-none");
                                    document.querySelector(".eyeClose").classList.add("d-none");
                                    document.getElementById("password").type = "password"
                                }
                            }}><AiOutlineEyeInvisible className='fs-5 eyeClose d-none' /><AiOutlineEye className='fs-5 eyeOpen' /></span>
                            <div class="form-floating">
                                <input type="password" className="form-control" id="password" placeholder="Passcode" />
                                <label htmlFor="password">Passcode</label>
                            </div>
                            <p className='ps-3 text-danger invalid-feedback'>*Incorrect Passcode</p>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='btn py-3' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login