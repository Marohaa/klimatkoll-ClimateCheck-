import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

function QuizResult(props) {
 return (
<<<<<<< HEAD
<Modal
  {...props}
  size="xl"
  centered
  style={{ border: 'none' }}
>

  <Modal.Header closeButton style={{ backgroundColor: "#4CAF83", color: 'white' }}>
    
  </Modal.Header>

  <Modal.Body style={{ backgroundColor: "#4CAF83", color: 'white' }}>
    <div className="d-flex justify-content-center align-content-center">
      <h4>
      Du svarade rätt på {props.numberOfCorrectAnswers}  utav {" "}
        {props.numberOfQuestion} frågor!
      </h4>
      <br />
     
    </div>
    {props.numberOfCorrectAnswers > 6 && (
      <Confetti
        className="confetti"
        gravity={0.4}
        run={props.showConfetti}
        numberOfPieces={props.numberOfCorrectAnswers * 10}
      />
    )}
  </Modal.Body>

  <Modal.Footer style={{ backgroundColor: "#4CAF83", justifyContent: 'center', alignItems: 'center' }}>
  <div>
    <Link as={Link} to="/quizstart">
      <a className="btn mx-auto rounded-pill text-dark" style={{ backgroundColor: "#F6F6F2" }}>
        Avsluta Quiz
      </a>
    </Link>
  </div>
</Modal.Footer>

</Modal>


=======
    <Modal
      {...props}
      size="xl"
      centered
    >

      <Modal.Header style={{ backgroundColor: "#4CAF83" }}>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "#4CAF83" }}>
        <div className="d-flex justify-content-center align-content-center">
          <h4>
            Du Svarade {props.numberOfCorrectAnswers} frågor av {" "}
            {props.numberOfQuestion} rätt.
          </h4>

<div className="justify-content-center align-content-center">
          <Link as={Link} to="/quizstart">
            <a className="btn mx-auto rounded-pill text-dark justify-content-center align-content-center" style={{ backgroundColor: "white" }}>
              Avsluta Quiz
            </a>
          </Link>
          </div>
        </div>
        {props.numberOfCorrectAnswers > 6 && (
          <Confetti
            className="confetti"
            gravity={0.4}
            run={props.showConfetti}
            numberOfPieces={props.numberOfCorrectAnswers * 10}
          />
        )}
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: "#4CAF83" }}>
      </Modal.Footer>
    </Modal>
>>>>>>> f3e0db44988972437ee9e46dbd75918445af37e7
 );
}

export default QuizResult;
