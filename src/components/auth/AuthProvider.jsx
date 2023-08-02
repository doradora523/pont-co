import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from '../../config/firebase';
import { setUserData } from '../../redux/slices/authSlice';
import { doc, getDocs, query, collection, where, onSnapshot } from 'firebase/firestore';
import { setMembersList } from '../../redux/slices/membersSlice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async (user) => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          dispatch(setUserData(userData));
          getCompanyMembers(userData);
        } else {
          dispatch(setUserData(null));
        }
      });

      return () => unsubscribe();
    }
  };

  const getCompanyMembers = async (userData) => {
    if (userData) {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('company', '==', userData.company));

      const querySnapshot = await getDocs(q);
      let users = [];
      querySnapshot.forEach((doc) => {
        if (doc.id !== userData.uid) {
          users.push(doc.data());
        }
      });

      dispatch(setMembersList(users));
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
