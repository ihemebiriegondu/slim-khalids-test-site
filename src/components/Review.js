import React, { Component } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/reviews.css'

class Review extends Component {
    state = {
        show: false
    }

    isAnswered = (q) => {
        return q.options.some(x => x.selected) ? 'Answered' : 'Not Answered';
    }

    render() {
        const handleShow = () => {this.setState ({show: true})}
        const handleHide = () => {this.setState ({show: false})}

        return <div>
            <button onClick={() => {handleShow()}} className='btn mt-5 directionBtn px-sm-5 px-4 py-sm-3 py-2 w-25' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="review">Review</button>

            <Offcanvas show={this.state.show} onHide={handleHide}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Review Quiz: </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            {/*<div>
                <h2 className="text-center font-weight-normal">Review Quiz: {this.props.quiz.name}</h2>
                <hr />
                <div className="row text-center">
                    {this.props.quiz.questions.map((q, index) =>
                        <div key={q.id} className="col-4 cursor-pointer">
                            <div id={index} onClick={this.props.move} className={`p-3 mb-2 ${this.isAnswered(q) === 'Answered' ? 'bg-info' : 'bg-warning'}`}>{index + 1}. {this.isAnswered(q)}</div>
                        </div>
                    )}
                </div>
                    </div>*/}
        </div >
    }
}

export default Review;