import React from 'react';

import '../css/results.css'

function Preview({ questions }) {
    let resultQuestions = questions;
    //console.log(resultQuestions)
    resultQuestions.forEach(q => {
        q.isCorrect = q.options.every(x => x.selected === x.isAnswer);
        //console.log(q)
        q.correctAnswer = q.options.find(x => x.isAnswer === true).id;
        //console.log(correctAnswers)
    })

    const closeWindow = () => {
        window.close();
    }

    let select = localStorage.getItem("university-choice");
    let overallTotal;
    if (select === "UNILAG" || select === "YABATECH") {
        overallTotal = "out of 30"
    } else if (select === "UNILORIN") {
        overallTotal = "%"
    }

    return (
        <div className='mainPreviewDiv'>
            <div className="pb-5 bg-light pt-5">
                <div className='col-11 m-auto'>
                    <h2 className="text-center font-weight-normal mb-4">Quiz Preview</h2>
                    {resultQuestions.map((q, index) =>
                        <div key={q.id} className={`mb-2 previewQuestionsBorder ${q.isCorrect ? 'answerCorrectBorder' : 'answerWrongBorder'}`}>
                            <div className="result-question px-md-5 px-3 py-3">
                                <h5>{index + 1}. {q.name}</h5>
                                <div className="row row-cols-2">
                                    {
                                        q.options.map(option =>
                                            <div key={option.id} className="col-6 mb-1">
                                                <span className='alphabetOption me-3'>{option.id}</span>
                                                <input id={option.id} className={`form-check-input ${q.isCorrect ? 'bg-success' : 'bg-danger'}`} type="checkbox" disabled="disabled" checked={option.selected} /> {option.name}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={`m-1 p-1 text-bold ${q.isCorrect ? 'answerCorrectText' : 'answerWrongText'}`}>Your answer is {q.isCorrect ? 'Correct' : 'Wrong'}. <span>The correct answer is {q.correctAnswer}</span></div>
                            </div>
                        </div>
                    )}

                    <div className='mt-4'>
                        <p className='fs-5'>Score: <span id='previewscore'></span> {overallTotal}</p>
                    </div>
                    <div className='text-center mt-5 mb-5 retake-btn'>
                        <a href='https://quizzes.slimkhalid.com.ng' onClick={(e) => { closeWindow() }} className='btn btn-primary text-uppercase text-white rounded rounded-2 px-5 py-3'>Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;