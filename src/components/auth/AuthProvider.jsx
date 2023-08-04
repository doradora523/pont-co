import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/slices/authSlice';
import { setMembersList } from '../../redux/slices/membersSlice';
import useFactualInfo from '../../apis/getFactualInfo';

import { auth, db } from '../../config/firebase';
import { doc, getDocs, query, collection, where, onSnapshot } from 'firebase/firestore';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getCompanyMembers = useCallback(
    async (userData) => {
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
    },
    [dispatch],
  );

  const getUser = useCallback(
    (user) => {
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
    },
    [dispatch, getCompanyMembers],
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const unsubscribeSnapshot = getUser(user);
      return () => {
        unsubscribe();
        if (unsubscribeSnapshot) unsubscribeSnapshot();
      };
    });

    return () => unsubscribe();
  }, [getUser]);

  useFactualInfo();

  return children;
};

export default AuthProvider;
