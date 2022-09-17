import React from 'react'

import { IoPersonCircleOutline } from 'react-icons/io5'
import { GiAlarmClock } from 'react-icons/gi'
//import logo from '../images/sample.png'
//import schoollogo from '../images/unilag.png'
import "../css/test.css"

const Test = () => {
  return (
    <div className='mainTestPage'>
      <div className='school-name mb-0 py-1'>
        <h3 className='text-center m-0'>Unilag Post-UTME practice questions</h3>
      </div>

      <div className='timer-container py-3 mt-0'>
        <div className='col-11 m-auto d-flex align-items-center justify-content-between'>
          <div className='info-div d-flex align-items-center'>
            <IoPersonCircleOutline className='display-4 person-icon me-3' />
            <span className='person-name'>Egondu</span>
          </div>

          <div className='timer-div d-flex align-items-center'>
            <div className='d-flex align-items-center me-4'>
              <GiAlarmClock className='display-5 me-2' />
              <span className='time'>00:40:00</span>
            </div>
            <button className='btn px-4 py-3'>Submit</button>
          </div>
        </div>
      </div>
    </div>

    /*<div className='mainTestPage'>
      {/*<nav className="navbar shadow-sm">
        <div className="container-fluid">
          <a className='navbar-brand' href='fdd'>
            <img src={logo} alt="" width="70" height="70" />
          </a>
        </div>
  </nav >
      <nav className="navbar shadow-sm rounded rounded-pill fixed-top">
        <div className="container-fluid align-items-center px-5 py-3">
          <p className='p-0 m-0 fs-5'>Time left: <span>40:00</span></p>
          <button className='btn btn-outline-danger border border-3 border-danger px-5 text-uppercase py-2'>End Test</button>
        </div>
      </nav >
      <main className='mainTestDiv shadow'>
        {/*<h1 className='text-center'>University of Lagos post-utme exam practice</h1>
        <div className='row mainTestContaier'>
          <div className='col-5 d-xl-flex d-none bg-white flex-column align-items-center justify-content-center'>
            <img src={schoollogo} alt="" />
          </div>
          <div className='col-xl-7 col-12'>
            <div className='questionsDiv mt-5 pt-5 px-4'>
              <div>
                <p className='testQuestion'>Who is the president of Nigeria?</p>
                <div className='testOptionsDiv ms-5 mt-5'>
                  <div className='testOption'>
                    <input type={"radio"} id="option1" name='options' className='me-5' />
                    <label htmlFor='option1' className='ms-4'>Muhammed Buhari</label>
                  </div>
                  <div className='testOption'>
                    <input type={"radio"} id="option1" name='options' className='me-5' />
                    <label htmlFor='option1' className='ms-4'>Muhammed Buhari</label>
                  </div>
                  <div className='testOption'>
                    <input type={"radio"} id="option1" name='options' className='me-5' />
                    <label htmlFor='option1' className='ms-4'>Muhammed Buhari</label>
                  </div>
                  <div className='testOption'>
                    <input type={"radio"} id="option1" name='options' className='me-5' />
                    <label htmlFor='option1' className='ms-4'>Muhammed Buhari</label>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between pe-4 mt-5 pt-5'>
                <button className='btn directionBtn py-3 px-5'>Prev</button>
                <button className='btn directionBtn py-3 px-5'>Next</button>
              </div>
              <p className='text-center mt-5 fw-bold fs-5'>Question 1/30</p>
            </div>
          </div>
        </div>
      </main>
  </div >*/
  )
}

export default Test