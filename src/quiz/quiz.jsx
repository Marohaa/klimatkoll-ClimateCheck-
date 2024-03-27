import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Question from "./Question";

import shuffleArray from "./utils";



const Quiz = () => {
  const [QuizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const url = "data.json";
    //hämtar data från json fil
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map(
          (p) => (p.all_answers = [p.correct_answer, ...p.incorrect_answers])
        );
        shuffleArray(data);
        data.map((p) => shuffleArray(p.all_answers));
        setQuizData(data);
        //shufflar data och visar nytt ordning varj gång
      });
  }, []);



  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < QuizData.length - 1) setCurrentIndex(currentIndex + 1);
  };
  // gör det möjlogt att gå farm och tillbaka

  const onAnswer = (ans) => {
    QuizData[currentIndex].isCorrect =
      QuizData[currentIndex].correct_answer === ans;
    QuizData[currentIndex].currentUserAnswer = ans;
    setQuizData([...QuizData]);
  };

 

  return (
    <>
      <div>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={7} >
              <div>
                <Question
                  data={QuizData[currentIndex]}
                  index={currentIndex}
                  numberOfQuestion={QuizData.length}
                  onAnswer={onAnswer}
                ></Question>

                <div xs={12} style={{ textAlign: "center" }}>
                  {currentIndex !== QuizData.length - 10 && (
                    <Button
                      className="rounded-pill text-white btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
                      style={{
                        float: "left",
                        backgroundColor: "#4CAF83",
                        marginTop: "3rem",
                        minWidth: "150px",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "clamp(14px, 3vw, 16px)",
                        border: "none",
                      }}
                      onClick={handlePrev}
                    >
                      Tillbaka
                    </Button>
                  )}

                  {currentIndex !== QuizData.length - 1 && (
                    <Button
                      className="rounded-pill text-white btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
                      style={{
                        float: "right",
                        backgroundColor: "#4CAF83",
                        marginTop: "3rem",
                        minWidth: "150px",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "clamp(14px, 3vw, 16px)",
                        border: "none",
                      }}
                      onClick={handleNext}
                    >
                      Nästa fråga
                    </Button>
                  )}

                  {currentIndex === QuizData.length - 1 && (
                    <Button
                      className="rounded-pill text-white btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
                      style={{
                        float: "right",
                        backgroundColor: "#4CAF83",
                        marginTop: "3rem",
                        minWidth: "150px",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "clamp(14px, 3vw, 16px)",
                        border: "none",
                      }}
                    
                    >
                      Slutför
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Quiz;
