// setChallengesToFirebase.js
import  { useEffect } from 'react';
import { db } from '../firebase/firebase';
import { ref, set } from 'firebase/database';

const SetChallengesToFirebase = ({ userId, challenges }) => {
  useEffect(() => {
    if (userId) {
      const userChallengesRef = ref(db, `users/${userId}/completedChallenges`);
      set(userChallengesRef, challenges);
    }
  }, [userId, challenges]);

  return null;
};

export default SetChallengesToFirebase;
