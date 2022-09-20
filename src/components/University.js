import React from 'react'
import bigLogo from '../images/biglogo.png'

import "../css/login.css"

const assignUniversity = () => {
    const select = document.getElementById("select").value;
    localStorage.setItem("university-choice", select);
    document.getElementById("universityform").action = "/instructions";
}

const University = () => {
    let participantName = localStorage.getItem("participantName");

    return (
        <div className='mainLoginPage'>
            <img src={bigLogo} alt="" className='mainLoginImg' />
            <div className='login-backdrop'>
                <div className='mainForm'>
                    <form className='shadow-lg' id='universityform' action='' onSubmit={() => assignUniversity()}>
                        <p className='m-0 mb-4 fw-bold text-center fs-5'>Welcome {participantName}</p>
                        <p className='m-0 mb-2'>To begin the test kindly select your preferred university</p>
                        <select id='select' className="form-select form-select-lg mb-5 shadow-none" aria-label=".form-select-lg example">
                            <option selected>Select a university</option>
                            <option value="UNILAG">UNILAG</option>
                            <option value="YABATECH">YABATECH</option>
                            <option value="UNILORIN">UNILORIN</option>
                        </select>

                        <div className='text-center mt-5'>
                            <button className='btn py-3' type='submit'>Select</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default University