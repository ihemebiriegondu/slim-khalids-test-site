import React, { Component } from 'react'
import MyQuestions from '../JSON/Unilag.json'

import { GiAlarmClock } from 'react-icons/gi'

import "../css/test.css"
import Review from '../components/Review'

let arrayQuestions = MyQuestions.questions
//select the question randomly from json questions
let newQuestions = arrayQuestions
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

// slice the questions to get the amount to display (40 for unilag and yabatech, 50 for Unilorin)
const slicedQuestions = newQuestions.slice(0, 5);

class UnilagPu extends Component {

    //make constructor to change the index value (use useState for functional components)
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            size: 1
        };
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
            console.log("somethgh")
            q.options.forEach((x) => { x.selected = false; });
        }
        q.options.find(x => x.id === option.id).selected = true;

        //this.props.onAnswer(quiz);
    }

    render() {

        //For showing the questions one after the other instead of together on a page
        let questions = (slicedQuestions) ? slicedQuestions.slice(this.state.index, this.state.index + this.state.size) : [];
        let quiz = slicedQuestions;

        //let 


        return (
            <div className='mainTestPage'>
                <div className='school-name mb-0 py-1 px-4'>
                    <h3 className='text-center m-0'>Unilag Post-UTME practice questions</h3>
                </div>

                <div className='timer-container py-3 mt-0'>
                    <div className='col-11 timer-container-div m-auto d-flex justify-content-between'>
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
                            <Review />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default UnilagPu;