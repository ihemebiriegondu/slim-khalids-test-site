import React, { Component } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

import MyQuestions from '../JSON/Unilag.json'

import { GiAlarmClock } from 'react-icons/gi'

import "../css/test.css"
import '../css/reviews.css'
import Results from '../components/Results';
import Preview from '../components/Preview';



let arrayQuestions = MyQuestions.questions
//select the question randomly from json questions
let newQuestions = arrayQuestions
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

// slice the questions to get the amount to display (40 for unilag and yabatech, 50 for Unilorin)
const slicedQuestions = newQuestions.slice(0, 50);

class Unilorin extends Component {

    //make constructor to change the index value (use useState for functional components)
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            size: 1,
            time: {},
            seconds: 1800
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }


    //setting state for the offcanvas
    state = {
        show: false
    }

    //timer countdown
    secondsToTime(secs) {
        let hours = parseInt(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = parseInt(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        document.getElementById("timmmer").classList.remove("late-time")
        document.getElementById("clock-timmmer").classList.remove("late-time")

        if (seconds < 120) {
            document.getElementById("timmmer").classList.add("late-time");
            document.getElementById("clock-timmmer").classList.add("late-time")
        }

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);

            let questions = slicedQuestions;
            let totalScore = 0;

            questions.forEach(question => {
                //checking thorugh the displayed questions for ann the selected options and assigning them to a variable question.isCorrect
                question.isCorrect = question.options.every(x => x.selected === x.isAnswer);

                //checking if the selected options is true
                if (question.isCorrect === true) {

                    //adding to the total score
                    totalScore += 1;
                }
            })
            const newTotalScore = parseFloat(totalScore / 50 * 100).toFixed(2)

            document.getElementById("score").textContent = newTotalScore
            document.querySelector(".mainResultDiv").classList.add("show");
        }
        /*{this.state.time.m} s: {this.state.time.s} */
    }



    //To keep selected options after pressing the next or previous button
    onAnswer(question, option) {
        let quiz = slicedQuestions;
        //console.log(quiz)

        //You can use this example below to understand the codes under it
        //For searching through an array to get an object with a particular id

        /*let myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'}]
        console.log(myArray)
        console.log(myArray.find(x => x.id === '45'))*/

        //console.log(quiz.find(x => x.id === 1010))

        let q = quiz.find(x => x.id === question.id);
        //console.log(q)

        if (q.questionTypeId === 1) {
            q.options.forEach((x) => { x.selected = false; });
        }
        q.options.find(x => x.id === option.id).selected = true;

        //this.props.onAnswer(quiz);
    }

    //checking if an option is selected for the review
    isAnswered = (q) => {
        return q.options.some(x => x.selected) ? 'Answered' : 'Not Answered';
    }

    render() {
        const onConfirmRefresh = function (event) {
            event.preventDefault();
            return event.returnValue = "Are you sure you want to leave the page?";
        }

        window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });


        //For showing the questions one after the other instead of together on a page
        let questions = (slicedQuestions) ? slicedQuestions.slice(this.state.index, this.state.index + this.state.size) : [];
        let quiz = slicedQuestions;

        //let 
        const handleShow = () => { this.setState({ show: true }) }
        const handleHide = () => { this.setState({ show: false }) }

        const scoreToUpdate = () => {
            let questions = slicedQuestions;
            let totalScore = 0;


            questions.forEach(question => {
                //checking thorugh the displayed questions for ann the selected options and assigning them to a variable question.isCorrect
                question.isCorrect = question.options.every(x => x.selected === x.isAnswer);

                //checking if the selected options is true
                if (question.isCorrect === true) {

                    //adding to the total score
                    totalScore += 1;
                }
            })
            const newTotalScore = parseFloat(totalScore / 50 * 100).toFixed(2)
            const overThirtyScore = parseFloat(newTotalScore / 3.3).toFixed(2);

            localStorage.setItem("OverThirtyScore", overThirtyScore);
            localStorage.setItem("TotalScore", newTotalScore);

            document.getElementById("score").textContent = newTotalScore
            document.getElementById("previewscore").textContent = newTotalScore
        }

        const showFinalResult = (event) => {
            event.preventDefault()

            //console.log(localStorage)
            document.querySelector(".mainResultDiv").classList.add("show");
            localStorage.removeItem("clickCounter");
            //console.log(clickCounter)

            document.getElementById("review").setAttribute("disabled", "");
        }

        function addScore(event) {
            event.preventDefault();
            scoreToUpdate();

            const scriptURL = 'https://script.google.com/macros/s/AKfycbxIPMSrkdC8kSCYy2673OcrtCwcyTV-Ps--mneqtb3XSd0RBbfzyE6BmrUU06hmamGc6Q/exec'
            const form = document.forms['submit-to-google-sheet']

            document.getElementById("score-form-inpur").value = localStorage.getItem("TotalScore")
            document.getElementById("over-30-score").value = localStorage.getItem("OverThirtyScore");

            let clickCounter = localStorage.getItem("clickCounter");

            if (clickCounter === "add") {
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => console.log('Success!', showFinalResult(event)))
                    .catch(error => console.error('Error!'))
            } else {
                document.querySelector(".mainResultDiv").classList.remove("show");
                window.open('https://quizzes.slimkhalid.com.ng?', '_parent')
            }


        }

        return (
            <div className='mainTestPage' onLoad={this.startTimer}>
                <div className='school-name mb-0 py-1 px-4'>
                    <h3 className='text-center m-0'>Unilorin Post-UTME practice questions</h3>
                </div>

                <div className='timer-container py-3 mt-0'>
                    <div className='col-11 timer-container-div m-auto d-flex justify-content-between'>
                        <div className='timer-div d-flex align-items-center'>
                            <div className='d-flex align-items-center me-4'>
                                <GiAlarmClock className='display-5 me-2 my-clock' id='clock-timmmer' />
                                <span className='time' id='timmmer'>{this.state.time.m} : {this.state.time.s}</span>
                            </div>
                            <form id='scoreForm' name='submit-to-google-sheet' onSubmit={(event) => { addScore(event) }}>
                                <input className='d-none' value={localStorage.getItem("participantName")} name='Name' />
                                <input className='d-none' value={localStorage.getItem("userEmail")} name='Email' />
                                <input className='d-none' value={localStorage.getItem("university-choice")} name='University' />
                                <input className='d-none' id='score-form-inpur' value={localStorage.getItem("TotalScore")} name='Score' />
                                <input className='d-none' id='over-30-score' value={localStorage.getItem("OverThirtyScore")} name='Over30' />

                                <button type='submit' className='btn btn-danger px-sm-4 px-3 py-sm-3 py-2' id="quit-button" /*onClick={() => { showFinalResult() }}*/ >Submit</button>

                            </form>
                        </div>
                    </div>
                </div>

                <main>
                    <div className='col-11 m-auto mt-5'>
                        {questions.map(q =>
                            <div key={q.id}>
                                <p className='testQuestion'>{this.state.index + 1}. {q.name}</p>
                                <div className='testOptionsDiv ms-md-5 ms-3 mt-4'>
                                    {
                                        q.options.map(option =>
                                            <div className='testOption' key={option.id}>
                                                <span className='alphabetOption'>{option.id}</span>
                                                <input id={option.id} checked={option.selected} name={option.inputname} type="radio" onChange={() => this.onAnswer(q, option)} />
                                                <label htmlFor={option.id} className='ms-2'>
                                                    {option.name}
                                                </label>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )}

                        <div className='d-flex align-items-center justify-content-between pe-4 mt-5 pt-5'>
                            <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' id="prev" onClick={() => { if (this.state.index > 0) { this.setState({ index: this.state.index - 1 }) } }}>Prev</button>
                            <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' id="next" onClick={() => { if (this.state.index < (quiz.length - 1)) { this.setState({ index: this.state.index + 1 }) } }}>Next</button>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => { handleShow() }} className='btn mt-5 directionBtn px-sm-5 px-4 py-sm-3 py-2 w-25' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="review">Review</button>
                        </div>
                    </div>

                    {/*offcanvas for displaying the review of the test*/}

                    <Offcanvas show={this.state.show} onHide={handleHide}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Review Quiz </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="row row-cols-5 text-center">
                                {slicedQuestions.map((q, index) =>
                                    <div key={q.id} className="cursor-pointer">
                                        <div id={index} onClick={(e) => { (this.setState({ index: parseInt(e.target.id, q.length) })); handleHide() }} className={`p-2 mb-2 ${this.isAnswered(q) === 'Answered' ? 'answered-review' : 'warning-review'}`}>{index + 1}{/*. {this.isAnswered(q)}*/}</div>
                                    </div>
                                )}
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </main>

                {/*showing the results over the main page, to prevent going back to the test */}
                <Results className="" />

                <Preview className="" questions={slicedQuestions || []} />
            </div>
        );
    }
}

export default Unilorin;
