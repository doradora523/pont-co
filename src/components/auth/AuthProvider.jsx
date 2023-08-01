import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, db } from '../../config/firebase';
import { setUserData } from '../../redux/slices/authSlice';
import { getDocs, where, query, collection } from 'firebase/firestore';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const usersCollectionRef = collection(db, 'users');

  const getUser = async () => {
    const user = auth.currentUser;
    try {
      if (user) {
        // 사용자의 UID를 이용하여 해당 사용자의 데이터를 가져오는 쿼리 생성
        const q = query(usersCollectionRef, where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          dispatch(setUserData(userData));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await getUser();
      } else {
        dispatch(setUserData(null));
      }
    });

    // 컴포넌트가 언마운트될 때 구독 해제
    return () => unsubscribe();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
