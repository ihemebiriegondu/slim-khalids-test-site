import React, { Component } from 'react'
import bigLogo from '../images/biglogo.png'
import { BsEmojiSmile } from 'react-icons/bs'

import '../css/results.css'

export default class Results extends Component {
    render() {
        return (
            <div className='mainResultDiv show'>
                <img src={bigLogo} alt="" className='mainLoginImg' />
                <div className='login-backdrop'>
                    <div className='mainForm'>
                        <div className='result'>
                            <h3>Well-done <BsEmojiSmile /></h3>
                            <p>Name: Egondu</p>
                            <p>Score: 24 out of 30</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
