import React from "react";

const Question = (props) => {
 const data = props.data;

 if (data === undefined) return <p>There is no data</p>;

 const handleChange = (e) => {
    props.onAnswer(e.target.value);
    //notify the parent 
 };

 const currentQuestion = data;
 const currentUserAnswer = data.currentUserAnswer;

 return (
  <>
    <h2 style={{ fontSize: 30, marginBottom: "20px", color: "#4CAF83" }}>Testa dina kunskaper med quiz</h2>
    <div className="py-3 px-3 rounded" style={{ backgroundColor: '#F6F6F2' }}>
      <div className="my-4 py-4 px-4 card-body rounded" style={{ backgroundColor: 'white' }}>
        <h4 style={{ fontSize: 30, marginBottom: "20px", color: "#4CAF83" }}>Fråga {props.index + 1}/10</h4>
        <p>{currentQuestion.question}</p>
      </div>
      {/* answers with checkbox and choices */}
      <div className="row">
        {currentQuestion.all_answers.map((answer, index) => (
          <div key={index} className="col-md-6">
            <div className={`form-check my-2 py-3 px-4 card-body rounded ${currentUserAnswer !== currentQuestion.correct_answer && currentUserAnswer === answer ? "text-danger" : ""}`} style={{ backgroundColor: 'white' }}>
            <input
                className="success"
                type="checkbox"
                name="options-outlined"
                id={`answer-${index}`}
                value={answer}
                checked={currentUserAnswer === answer ? true : false}
                onChange={handleChange}
              />
              <label className="mx-2" htmlFor={`answer-${index}`}>
                {answer} {currentUserAnswer !== currentQuestion.correct_answer && currentUserAnswer === answer && "(Fel svar)"}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
 );
};

export default Question;
