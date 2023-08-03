import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import signupSlice from './slices/signupSlice';
import membersSlice from './slices/membersSlice';
import questionsSlice from './slices/questionsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    signup: signupSlice,
    members: membersSlice,
    questions: questionsSlice,
  },
});
