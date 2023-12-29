// ChallengesProvider.js
import React, { createContext, useContext, useState } from 'react';
import { db } from '../firebase/firebase';
import { auth } from '../firebase/firebase'; // Importera auth från din firebase.js-fil
import {  ref, set } from 'firebase/database';

const ChallengesContext = createContext();

export const ChallengesProvider = ({ children }) => {
  const [checkedChallenges, setCheckedChallenges] = useState([]);

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
    const userId = auth.currentUser.uid; // Användarens UID från Firebase Authentication
    const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);
    
    set(userChallengesRef, updatedChallenges);
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