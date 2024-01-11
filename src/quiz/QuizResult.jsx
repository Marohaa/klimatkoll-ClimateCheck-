import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

function QuizResult(props) {
 return (
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
 );
}

export default QuizResult;
