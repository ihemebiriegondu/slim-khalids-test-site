import React, { Component } from 'react'

import { IoPersonCircleOutline } from 'react-icons/io5'
import { GiAlarmClock } from 'react-icons/gi'

import PTquestions from '../JSON/UnilagQ.json'
import isEmpty from '../components/IsEmpty'
import "../css/test.css"

class Unilag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PTquestions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            nextButtonDisabled: false,
            previousButtonDisabled: true,
            previousRandomNumbers: [],
            time: {}
        };
        this.interval = null;
    }

    componentDidMount() {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    displayQuestions = (questions = this.state.PTquestions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.PTquestions)) {
            questions = this.state.PTquestions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions: questions.length,
                answer,
                previousRandomNumbers: []
            }, () => {
                this.showOptions();
                this.handleDisableButton();
            });
        }
    };

    handleOptionClick = (e) => {
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctTimeout = setTimeout(() => {
                this.correctSound.current.play();
            }, 500);
            this.correctAnswer();
        } else {
            this.wrongTimeout = setTimeout(() => {
                this.wrongSound.current.play();
            }, 500);
            this.wrongAnswer();
        }
    }

    handleNextButtonClick = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            });
        }
    };

    handlePreviousButtonClick = () => {
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            });
        }
    };

    handleQuitButtonClick = () => {
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    };

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }

    };

    correctAnswer = () => {
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.PTquestions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.PTquestions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
        });
    }

    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds,
                        distance
                    }
                });
            }
        }, 1000);
    }

    handleDisableButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                previousButtonDisabled: true
            });
        } else {
            this.setState({
                previousButtonDisabled: false
            });
        }

        if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }
    }

    endGame = () => {
        alert('Quiz has eneded!');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            fiftyFiftyUsed: 2 - state.fiftyFifty,
            hintsUsed: 5 - state.hints
        };
        setTimeout(() => {
            this.props.history.push('/play/quizSummary', playerStats);
        }, 1000);
    }

    render() {
        const {
            currentQuestion,
            currentQuestionIndex,
            numberOfQuestions,
            time
        } = this.state;

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
                                <span className='time'>00:{time.minutes}:{time.seconds}</span>
                            </div>
                            <button className='btn btn-danger px-sm-4 px-3 py-sm-3 py-2' id="quit-button" onClick={this.handleButtonClick}>Submit</button>
                        </div>
                    </div>
                </div>

                <main>
                    <div className='col-11 m-auto mt-5'>
                        <h4 className='mb-5'>Question  {currentQuestionIndex + 1} / {numberOfQuestions}</h4>
                        <div>
                            <p className='testQuestion'>{currentQuestion.question}</p>
                            <div className='testOptionsDiv ms-md-5 ms-3 mt-4'>
                                <div className='testOption'>
                                    <span className='alphabetOption'>A</span>
                                    <input onClick={this.handleOptionClick} type={"radio"} id="option1" name='options' className='' />
                                    <label htmlFor='option1' className='ms-2'>{currentQuestion.optionA}</label>
                                </div>
                                <div className='testOption'>
                                    <span className='alphabetOption'>B</span>
                                    <input onClick={this.handleOptionClick} type={"radio"} id="option1" name='options' className='' />
                                    <label htmlFor='option1' className='ms-2'>{currentQuestion.optionB}</label>
                                </div>
                                <div className='testOption'>
                                    <span className='alphabetOption'>C</span>
                                    <input onClick={this.handleOptionClick} type={"radio"} id="option1" name='options' className='' />
                                    <label htmlFor='option1' className='ms-2'>{currentQuestion.optionC}</label>
                                </div>
                                <div className='testOption'>
                                    <span className='alphabetOption'>D</span>
                                    <input onClick={this.handleOptionClick} type={"radio"} id="option1" name='options' className='' />
                                    <label htmlFor='option1' className='ms-2'>{currentQuestion.optionD}</label>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-between pe-4 mt-5 pt-5'>
                            <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' onClick={this.handleButtonClick} id="previous-button">Prev</button>
                            <button className='btn directionBtn px-sm-5 px-4 py-sm-3 py-2' onClick={this.handleButtonClick} id="next-button">Next</button>
                        </div>
                    </div>
                </main>
            </div>



            /*
                            <div className="questions">
                                <h2>Quiz Mode</h2>
                                
                                <div className="timer-container">
                                    <p>
                                        <span className="left" style={{ float: 'left' }}>of </span>
                                        <span className="">
                                            
                                            <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                                    </p>
                                </div>
                                <h5>{currentQuestion.question}</h5>
                                <div className="options-container">
                                    <p onClick={this.handleOptionClick} className="option"></p>
                                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                                </div>
                                <div className="options-container">
                                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                                </div>
                            </div>*/
        );
    }
}

export default Unilag;