import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  email: '',
  userName: '',
  company: '',
  team: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword, setPasswordCheck, setUserName, setCompany, setTeam, setErrors, resetFields } =
  userSlice.actions;

export default userSlice.reducer;
