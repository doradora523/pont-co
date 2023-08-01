import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    uid: '',
    userName: '',
    email: '',
    company: '',
    team: '',
    src: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2023/05/1893390626_20230503155222_9195618912.jpg',
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
