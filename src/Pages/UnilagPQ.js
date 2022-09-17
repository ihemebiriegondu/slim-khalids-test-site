import React, { useState } from 'react'

import { IoPersonCircleOutline } from 'react-icons/io5'
import { GiAlarmClock } from 'react-icons/gi'

import PTquestions from '../JSON/UnilagQ.json'
import "../css/test.css"

const UnilagPQ = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div className='mainTestPage'>
            <div className='school-name mb-0 py-1 px-4'>
                <h3 className='text-center m-0'>Unilag Post-UTME practice questions</h3>
            </div>

            <div className='timer-container py-3 mt-0'>
                <div className='col-11 timer-container-div m-auto d-flex justify-content-between'>
                    <div className='info-div d-flex align-items-center justify-content-start'>
                        <IoPersonCircleOutline className='display-4 person-icon me-3' />
                        <span className='person-name'>Egondu</span>
                    </div>

                    <div className='timer-div d-flex align-items-center'>
                        <div className='d-flex align-items-center me-4'>
                            <GiAlarmClock className='display-5 me-2' />
                            <span className='time'>00:40:00</span>
                        </div>
                        <button className='btn btn-danger px-sm-4 px-3 py-sm-3 py-2' id="quit-button">Submit</button>
                    </div>
                </div>
            </div>

            <main>
                <div className='col-11 m-auto mt-5'>
                    <h4 className='mb-5'>Question {currentQuestion + 1} / {PTquestions.length}</h4>
                    <div>
                        <p className='testQuestion'>{PTquestions[currentQuestion].question}</p>
                        <div className='testOptionsDiv ms-md-5 ms-3 mt-4'>
                            {PTquestions[currentQuestion].options.map((option) => {
                                return (
                                    <div className='testOption'>
                                        <span className='alphabetOption'>A</span>
                                        <input type={"radio"} id="option1" name='options' className='' />
                                        <label htmlFor='option1' className='ms-2'>me</label>
                                    </div>
                                )
                            }
                            )};
                        </div>
                    </div>

                    <div className='d-flex align-items-center justify-content-between pe-4 mt-5 pt-5'>
                        <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' id="previous-button">Prev</button>
                        <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' id="next-button">Next</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UnilagPQ