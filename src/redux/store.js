import { configureStore } from '@reduxjs/toolkit';
import { membersSlice } from './slices/membersSlics';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    members: membersSlice,
  },
});
