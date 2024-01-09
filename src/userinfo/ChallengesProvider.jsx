// ChallengesProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, auth } from '../firebase/firebase';
import { ref, get, set } from 'firebase/database';

const ChallengesContext = createContext();

export const ChallengesProvider = ({ children }) => {
  const [checkedChallenges, setCheckedChallenges] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid; 

    if (userId) {
      // Fetch the checked challenges from Firebase when the component mounts
      const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);

      get(userChallengesRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setCheckedChallenges(snapshot.val());
          }
        })
        .catch((error) => {
          console.error('Error fetching checked challenges:', error);
        });
    }
  }, []); 

  const toggleCheckbox = (index) => {
    // Uppdatera state för checkedChallenges
    const updatedChallenges = [...checkedChallenges];

    if (updatedChallenges.includes(index)) {
      // Om utmaningen redan är markerad som klar, ta bort den från listan
      const challengeIndex = updatedChallenges.indexOf(index);
      updatedChallenges.splice(challengeIndex, 1);
    } else {
      // Annars lägg till den i listan
      updatedChallenges.push(index);
      
    }

    setCheckedChallenges(updatedChallenges);

    // Uppdatera Firebase Realtime Database
    const userId = auth.currentUser?.uid; 
    if (userId) {
      const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);
      set(userChallengesRef, updatedChallenges);
    }
  };

  return (
    <ChallengesContext.Provider value={{ checkedChallenges, toggleCheckbox }}>
      {children}
    </ChallengesContext.Provider>
  );
};

export const useChallenges = () => {
  const context = useContext(ChallengesContext);
  if (!context) {
    throw new Error('useChallenges must be used within a ChallengesProvider');
  }
  return context;
};

