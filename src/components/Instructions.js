import React, { Component } from 'react'

export default class Instructions extends Component {

    render() {
        let select = localStorage.getItem("university-choice");

        let Newattempt = localStorage.getItem("attempt")

        const chooseUniversity = (e) => {
            if (Newattempt > 0) {
                Newattempt--;

                document.getElementById("attempt").textContent = Newattempt;
                localStorage.setItem("attempt", Newattempt)

                if (select === "UNILAG") {
                    window.open('https://slim-khalid-practice.netlify.app/unilagtest?', '_blank', 'toolbar=0,location=0,menubar=0');
                    //document.getElementById("universityform").action = "/unilagtest";
                } else if (select === "YABATECH") {
                    window.open('https://slim-khalid-practice.netlify.app/yabatechtest?', '_blank', 'toolbar=0,location=0,menubar=0');
                    //document.getElementById("universityform").action = "/yabatechtest";
                } else if (select === "UNILORIN") {
                    window.open('https://slim-khalid-practice.netlify.app/unilorintest?', '_blank', 'toolbar=0,location=0,menubar=0');
                    //document.getElementById("universityform").action = "/unilorintest";
                } else {
                    e.preventDefault();
                }
            }

            else {
                alert("You have no attempt left")
                window.open('https://slim-khalid-practice.netlify.app', '_self', 'toolbar=0,location=0,menubar=0')
            }
        }


        return (
            <div className='pb-5'>
                <div className='school-name mb-0 py-1 px-4'>
                    <h3 className='text-center m-0'>{select} Post-UTME practice questions</h3>
                </div>
                <div className='col-11 m-auto mt-5'>
                    <h3 className='text-uppercase mb-3'>Instructions</h3>
                    <ul className='instructions-list'>
                        <li>Read all instructions carefully before clicking the start button.</li>
                        <li>Carefully read each questions before choosing the correct answer.</li>
                        <li>Use the <span className='fw-bold'>"Next"</span> and <span className='fw-bold'>"Prev"</span> buttons to navigate between questions.</li>
                        <li>Use the <span className='fw-bold'>Review</span> button to check for unanswered questions.</li>
                        <li>Click the question numbers in the Review page to jump to a certain question.</li>
                        <li>Click the <span className='fw-bold'>"Submit"</span> button when you are done with the test.</li>
                    </ul>

                    <button className='btn start-btn rounded rounded-0 px-5 py-3 mt-4 mb-5' id='' onClick={(e) => {
                        chooseUniversity(e)
                    }
                    }>Start</button>
                </div>
                <p className='ms-3 text-danger'><span id='attempt'>2</span> attempts left !</p>
            </div>
        )
    }
}