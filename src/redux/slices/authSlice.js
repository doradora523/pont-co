import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    uid: '',
    userName: '',
    email: '',
    company: '',
    team: '',
    src: '',
  },
  selections: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    getSelectionsData: (state, action) => {
      state.selections = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  setUserData,
  getSelectionsData,
} = authSlice.actions;

export default authSlice.reducer;
