import React, { useEffect, useState } from 'react';
import { auth, getUserData } from '../firebase/firebase';
import NavBar from '../navbar';
import { storage } from '../firebase/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useChallenges } from './ChallengesProvider';
import { db } from '../firebase/firebase';
import { ref, get } from 'firebase/database';


const Profil = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { checkedChallenges } = useChallenges();
  const [completedChallenges, setCompletedChallenges] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getUserData(authUser.uid)
          .then((userData) => {
            setUser(userData);

            // Hämta senast sparade bildens URL från localStorage med användarens UID som en del av nyckeln
            const storedUrl = localStorage.getItem(`profileImageUrl_${authUser.uid}`);
            if (storedUrl) {
              setUrl(storedUrl);
            }

            // Hämta klarade utmaningar från Firebase Realtime Database
            const userChallengesRef = ref(db, `users/${authUser.uid}/checkedChallenges`);

            get(userChallengesRef)
              .then((snapshot) => {
                if (snapshot.exists()) {
                  setCompletedChallenges(snapshot.val());
                  console.log('Completed Challenges:', snapshot.val());
                }
              })
              .catch((error) => {
                console.error('Error getting completed challenges:', error);
              });
          })
          .catch((error) => {
            console.error('Error getting user data:', error);
          });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setShowModal(true);
    }
  };

  const handleSubmit = async () => {
    try {
      // Använd användarens UID för att skapa en unik sökväg i Firebase Storage
      const imageRef = storageRef(storage, `images/${auth.currentUser.uid}/${image.name}`);

      await uploadBytes(imageRef, image);

      const downloadUrl = await getDownloadURL(imageRef);

      setUrl(downloadUrl);
      setImage(null);

      // Spara URL i localStorage med användarens UID som en del av nyckeln
      localStorage.setItem(`profileImageUrl_${auth.currentUser.uid}`, downloadUrl);
    } catch (error) {
      console.error('Error handling image submission:', error);
    } finally {
      handleCloseModal(); // Stäng modalen efter att bilden har laddats upp
    }
  };

  const handleCloseModal = () => setShowModal(false);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <Container>
        <div className="m-2 p-2">
          <h1 style={{ color: '#4CAF83', fontSize: '34px', padding:'20px' }}>Profil</h1>
          <Row>
            <Col md="6" className="mb-2">
              <div style={{ marginTop: '10px', width: '160px', position: 'relative' }}>
                <img
                   src={url || '/public/bilder/persona.icon.png'} // If `url` is not available, use a default image
                 
                  loading="lazy"
                  className="rounded-circle border"
                  style={{
                    cursor: 'pointer',
                    border: '5px solid transparent',
                    transition: 'border 0.3s',
                    width: '170px',
                    height: '170px',
                  
                  }}
                  onClick={() => setShowModal(true)}
                  onMouseEnter={(e) => (e.target.style.border = '5px solid #4CAF83')}
                  onMouseLeave={(e) => (e.target.style.border = '5px solid transparent')}
                />

                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#D3D3D3',
                    padding: '5px 10px 5px 10px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setShowModal(true)}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#B0B0B0';
                    e.target.title = 'Klicka för att ändra din profilbild';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#D3D3D3';
                    e.target.title = '';
                  }}
                >
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              </div>
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload New Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input type="file" onChange={handleImageChange} accept="image/*" />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                    style={{
                      backgroundColor: '#4CAF83',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: 14,
                      border: 'none',
                    }}
                    variant="secondary"
                    onClick={handleCloseModal}
                  >
                    Avbryt
                  </Button>
                  <Button
                    className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                    style={{
                      backgroundColor: '#4CAF83',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: 14,
                      border: 'none',
                    }}
                    onClick={handleSubmit}
                  >
                    Spara
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col md="6">
              {user.email && <p>Din e-post: {user.email}</p>}
              <p>Points: {user.points}</p>
              <p>Du har klarat {completedChallenges.length} utmaningar </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Profil;