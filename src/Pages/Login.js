import React from 'react'

import Participants from "../Participants.json"

import "../css/login.css"

const Login = () => {

    const validateLoginForm = (event) => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        if (email.value === "") {
            event.preventDefault();
            document.querySelector(".email-form-floating").classList.add("invalid-form")
            email.classList.add("is-invalid")
        } 

        if (password.value === "") {
            event.preventDefault();
            document.querySelector(".password-form-floating").classList.add("invalid-form")
            password.classList.add("is-invalid")
        }
        
        else {
            document.getElementById("loginform").action = "/test";
            document.querySelector(".email-form-floating").classList.remove("invalid-form")
            email.classList.remove("is-invalid")
        }

    }

    return (
        <div className='mainLoginPage'>
            {console.log(Participants)}
            <div className='login-backdrop'>
                <div className='mainForm'>
                    <form className='shadow-lg' id='loginform' action='' onSubmit={(event) => validateLoginForm(event)}>
                        <h3 className='mb-5'>Login to take the weekly test for the week of Sept 15</h3>
                        <div className="form-floating mb-5 email-form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label for="email">Email address</label>
                            <p className='ps-3 text-danger invalid-feedback'>*Invalid email address</p>
                        </div>
                        <div className="form-floating password-form-floating">
                            <input type="password" className="form-control" id="password" placeholder="Passcode" />
                            <label for="password">Passcode</label>
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