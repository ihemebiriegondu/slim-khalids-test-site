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
                            <h3 className='text-center mb-5'>Well-done <BsEmojiSmile className='text-warning' /></h3>
                            <p className='fs-5'>Name: {participantName}</p>
                            <p className='fs-5'>Score: <span id='score'></span> out of 30</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
