import React from 'react'

//import logo from '../images/sample.png'
import schoollogo from '../images/download (1).png'
import "../css/test.css"

const Test = () => {
  return (
    <div className='mainTestPage'>
      {/*<nav className="navbar shadow-sm">
        <div className="container-fluid">
          <a className='navbar-brand' href='fdd'>
            <img src={logo} alt="" width="70" height="70" />
          </a>
        </div>
  </nav >*/}
      <nav className="navbar shadow-sm rounded rounded-pill fixed-top">
        <div className="container-fluid align-items-center px-4 py-3">
          <p className='p-0 m-0 fs-5'>Time left: <span>40:00</span></p>
          <button className='btn btn-outline-danger border border-3 border-danger px-5 text-uppercase py-2'>End Test</button>
        </div>
      </nav >
      <main className='mainTestDiv'>
        {/*<h1 className='text-center'>University of Lagos post-utme exam practice</h1>*/}
        <div className='row mainTestContaier'>
          <div className='col-5'>
            <img src={schoollogo} alt="" />
          </div>
          <div className='col-7'>
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
    </div >
  )
}

export default Test