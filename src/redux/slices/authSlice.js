import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    uid: '',
    userName: '',
    email: '',
    company: '',
    team: '',
    src: 'https://i.pinimg.com/originals/68/b1/77/68b177feaf7970250997c89ac56c13ca.jpg',
  },
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
