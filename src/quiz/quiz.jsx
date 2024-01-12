import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Question from "./Question";
import QuizResult from "./QuizResult";
import shuffleArray from "./utils";
<<<<<<< HEAD
import NavBar from '../navbar';
import { db, auth } from '../firebase/firebase';
import { ref, set } from 'firebase/database';
=======
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7

const Quiz = () => {
  const [QuizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const url = "data.json";
=======
    const url = "/data/quizdata.json";
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map(
          (p) => (p.all_answers = [p.correct_answer, ...p.incorrect_answers])
        );
        shuffleArray(data);
        data.map((p) => shuffleArray(p.all_answers));
        setQuizData(data);
      });
  }, []);

<<<<<<< HEAD
  const updatePoints = (newPoints) => {
    if (auth.currentUser) {
      const userPointsRef = ref(db, `users/${auth.currentUser.uid}/points`);
      set(userPointsRef, newPoints);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

=======
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
  const handleNext = () => {
    if (currentIndex < QuizData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const onAnswer = (ans) => {
    QuizData[currentIndex].isCorrect =
      QuizData[currentIndex].correct_answer === ans;
    QuizData[currentIndex].currentUserAnswer = ans;
    setQuizData([...QuizData]);
  };

  const handleFinish = () => {
    setModalShow(true);
<<<<<<< HEAD

    const totalCorrectAnswers = QuizData.filter((p) => p.isCorrect).length;
    updatePoints(totalCorrectAnswers);
=======
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
  };

  const handleReset = () => {
    setCurrentIndex(0);
    QuizData.map((p) => (p.currentUserAnswer = ""));
    shuffleArray(QuizData);
    QuizData.map((p) => shuffleArray(p.all_answers));
    setQuizData([...QuizData]);
  };

  return (
<<<<<<< HEAD
    <>
      <NavBar />
      <div style={{ marginBottom: '' }}>
        <Container>
          <Row>
            <Col md={6}>
              <div>
                {/* Bakgrundsbild */}
                <img
                  className=""
                  src="bilder/10009641.png"
                  style={{ height: "700px", width: "700px" }}
                  alt="Background"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="mt-5">
                <Question
                  data={QuizData[currentIndex]}
                  index={currentIndex}
                  numberOfQuestion={QuizData.length}
                  onAnswer={onAnswer}
                ></Question>
                <Container className="my-2">
                  <Row>
                    <Col xs={12} style={{ textAlign: "center" }}>
                      {currentIndex !== QuizData.length - 10 && (
                        <Button
                        className="rounded-pill text-white btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
                     style={{
                       float: "left",
                       backgroundColor: "#4CAF83",
                       marginTop: "3rem",
                       minWidth: '150px',
                       color: 'white',
                       borderRadius: '20px',
                       fontSize: 'clamp(14px, 3vw, 16px)',
                       border: 'none',
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
                          minWidth: '150px',
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: 'clamp(14px, 3vw, 16px)',
                          border: 'none',
                        }}
                          onClick={handleNext}
                        >
                          Nästa
                        </Button>
                      )}

                      {currentIndex === QuizData.length - 1 && (
                     <Button
                     className="rounded-pill text-white btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
                     style={{
                       float: "right",
                       backgroundColor: "#4CAF83",
                       marginTop: "3rem",
                       minWidth: '150px',
                       color: 'white',
                       borderRadius: '20px',
                       fontSize: 'clamp(14px, 3vw, 16px)',
                       border: 'none',
                     }}
                     onClick={handleFinish}
                   >
                     Slutför
                   </Button>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>

        <QuizResult
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            handleReset();
          }}
          numberOfQuestion={QuizData.length}
          numberOfCorrectAnswers={QuizData.filter((p) => p.isCorrect).length}
        ></QuizResult>
      </div>
    </>
=======
    <div style={{marginBottom: ''}}>
      <Container>
        <Row>
          <Col md={6}>
            {/*here we use background image in an div.*/}
            <div>
              {" "}
              <img
                className=""
                src="bilder/10009641.png"
                style={{ height: "700px", width: "700px" }}
              ></img>{" "}
            </div>
          </Col>

          <Col md={6}>
            <div className="mt-5" 
            style={{
              
            }}>

            <Question
  data={QuizData[currentIndex]}
  index={currentIndex}
  numberOfQuestion={QuizData.length}
  onAnswer={onAnswer}
></Question>

<Container className="my-2">
  <Row>
    <Col xs={12} style={{ textAlign: "center" }}>

      {currentIndex !== QuizData.length - 10 && (
        <a className="btn rounded-pill text-white"
          
          style={{
            float: "left",
            backgroundColor: "#4CAF83",
            marginTop: "3rem",
            minWidth: '150px'
          }}
          onClick={handlePrev}
        >
          Tillbaka
        </a>
      )}

      {currentIndex !== QuizData.length - 1 && (
        <a className="btn rounded-pill text-white"
          
          style={{
            float: "right",
            backgroundColor: "#4CAF83",
            marginTop: "3rem",
            minWidth: '150px',
          }}
          onClick={handleNext}
        >
          Nästa
        </a>
      )}

      {currentIndex == QuizData.length - 1 && (
        <a className="btn rounded-pill text-white"
          
          style={{
            float: "right",
            backgroundColor: "#4CAF83",
            marginTop: "3rem",
            minWidth: '150px',
          }}
          onClick={handleFinish}
        >
          Slutför
        </a>

      )}
    </Col>
  </Row>
</Container>



          </div>
          </Col>
        </Row>
      </Container>

      <QuizResult
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          handleReset();
        }}
        numberOfQuestion={QuizData.length}
        numberOfCorrectAnswers={QuizData.filter((p) => p.isCorrect).length}
      ></QuizResult>
    </div>
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
  );
};

export default Quiz;
<<<<<<< HEAD

=======
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
