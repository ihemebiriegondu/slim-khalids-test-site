import React from 'react'
import bigLogo from '../images/biglogo.png'

import "../css/login.css"

const chooseUniversity = (e) => {
    const select = document.getElementById("select").value;

    if (select === "UNILAG") {
        document.getElementById("universityform").action = "/unilagtest";
    } else if (select === "YABATECH") {
        document.getElementById("universityform").action = "/yabatechtest";
    } else if (select === "UNILORIN") {
        document.getElementById("universityform").action = "/unilorintest";
    } else {
        e.preventDefault();
    }
}

const University = () => {
    return (
        <div className='mainLoginPage'>
            <img src={bigLogo} alt="" className='mainLoginImg' />
            <div className='login-backdrop'>
                <div className='mainForm'>
                    <form className='shadow-lg' id='universityform' action='' onSubmit={(e) => chooseUniversity(e)}>
                        <p className='m-0 mb-4 fw-bold text-center'>Welcome to Slim Khalid's weekly test</p>
                        <p className='m-0 mb-2'>To begin kindly select your preferred university</p>
                        <select id='select' className="form-select form-select-lg mb-5" aria-label=".form-select-lg example">
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