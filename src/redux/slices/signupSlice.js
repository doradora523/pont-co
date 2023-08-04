import { createSlice } from '@reduxjs/toolkit';
import { CHECK_PASSWORD, INFORM_COMPANY, INFORM_EMAIL, INFORM_PASSWORD, INFORM_TEAM, INFORM_USERNAME } from '../../static/constants';

const initialState = {
  email: '',
  password: '',
  passwordCheck: '',
  userName: '',
  company: '',
  team: '',
  errors: {
    email: { message: INFORM_EMAIL, isError: false },
    password: { message: INFORM_PASSWORD, isError: false },
    passwordCheck: { message: CHECK_PASSWORD, isError: false },
    userName: { message: INFORM_USERNAME, isError: false },
    company: { message: INFORM_COMPANY, isError: false },
    team: { message: INFORM_TEAM, isError: false },
  },
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordCheck: (state, action) => {
      state.passwordCheck = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetFields: (state) => {
      state.email = '';
      state.password = '';
      state.passwordCheck = '';
      state.userName = '';
      state.company = '';
      state.team = '';
      state.errors = {};
    },
  },
});

export const { setEmail, setPassword, setPasswordCheck, setUserName, setCompany, setTeam, setErrors, resetFields } =
  signupSlice.actions;

export default signupSlice.reducer;
