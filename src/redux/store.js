import { configureStore } from '@reduxjs/toolkit';
import { membersSlice } from './slices/membersSlics';
import authSlice from './slices/authSlice';
import signupSlice from './slices/signupSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    signup: signupSlice,
    members: membersSlice,
  },
});
