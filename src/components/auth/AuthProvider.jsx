import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, db } from '../../config/firebase';
import { setUserData } from '../../redux/slices/authSlice';
import { doc, onSnapshot } from 'firebase/firestore';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async (user) => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          dispatch(setUserData(userData));
        } else {
          dispatch(setUserData(null));
        }
      });

      return () => unsubscribe();
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      getUser(user);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
