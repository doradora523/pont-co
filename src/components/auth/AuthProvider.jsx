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
      if (userData && userData.company) {
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
            if (userData) {
              getCompanyMembers(userData);
            }
          } else {
            dispatch(setUserData(null));
          }
        });

        return () => unsubscribe();
      }
    },
    [dispatch, getCompanyMembers],
  );

  /** 컴포넌트가 마운트될 때 로그인 상태와 사용자 데이터의 변경을 추적,
   * 컴포넌트가 언마운트될 때 추적을 중단하여 메모리 누수를 방지 */
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
