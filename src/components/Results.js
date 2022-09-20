import React, { Component } from 'react'
import bigLogo from '../images/biglogo.png'
import { BsEmojiSmile } from 'react-icons/bs'

import '../css/results.css'

export default class Results extends Component {
    render() {
        let participantName = localStorage.getItem("participantName");
        //let newTotalScore = localStorage.getItem("UserTotalScore");

        return (
            <div className='mainResultDiv'>
                <img src={bigLogo} alt="" className='mainLoginImg' />
                <div className='login-backdrop'>
                    <div className='mainForm'>
                        <div className='result'>
                            <h3 className='text-center mb-5 fw-bold'>Well-done <BsEmojiSmile className='text-warning fw-bold' /></h3>
                            <p className='fs-5'>Name: {participantName}</p>
                            <p className='fs-5'>Score: <span id='score'></span> out of 30</p>

                            <div className='text-center mt-5 retake-btn'>
                                <button className='btn text-white rounded rounded-2 px-5 py-3' onClick={window.open('https://slim-khalid-practice.netlify.app/instructions?', '_self')}>Retake</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
