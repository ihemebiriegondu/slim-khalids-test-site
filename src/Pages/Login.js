import React from 'react'


import "../css/login.css"

const Login = () => {

    return (
        <div className='mainLoginPage'>
            <div className='login-backdrop'>
                <div className='mainForm'>
                    <form className='shadow-lg'>
                        <h3 className='mb-5'>Login to take the weekly test for the week of Sept 15</h3>
                        <div className="form-floating mb-5">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Passcode" />
                            <label for="floatingPassword">Passcode</label>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='btn py-3'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login