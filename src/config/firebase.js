import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAMz-GZMZXAa7rY9wuGofXnjxEzY2uiaEU',
//   authDomain: 'pont-co.firebaseapp.com',
//   projectId: 'pont-co',
//   storageBucket: 'pont-co.appspot.com',
//   messagingSenderId: '711548066881',
//   appId: '1:711548066881:web:6fb1359ad48fb40d8ffac0',
//   measurementId: 'G-CZ0PZL3EG0',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyD2UZnNWBEyvaWTxj06cBPNUq1twyPR_IU',
  authDomain: 'pont-co-b9781.firebaseapp.com',
  projectId: 'pont-co-b9781',
  storageBucket: 'pont-co-b9781.appspot.com',
  messagingSenderId: '107302229027',
  appId: '1:107302229027:web:615586f343bb1e910e4d96',
  measurementId: 'G-RYLVBPMWLN',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
