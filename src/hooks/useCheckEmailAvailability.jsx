import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const useCheckEmailAvailability = async (email) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email availability:', error);
    return false;
  }
};

export default useCheckEmailAvailability;
