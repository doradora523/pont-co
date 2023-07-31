import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  email: '',
  password: '',
  passwordCheck: '',
  userName: '',
  company: '',
  team: '',
  errors: {
    email: { message: '아이디를 입력해주세요.', isError: false },
    password: { message: '8~16자리의 비밀번호를 입력해주세요.', isError: false },
    passwordCheck: { message: '확인을 위하여 위와 동일하게 입력해주세요.', isError: false },
    userName: { message: '이름을 입력해주세요.', isError: false },
    company: { message: '회사를 선택해주세요.', isError: false },
    team: { message: '부서를 선택해주세요.', isError: false },
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
