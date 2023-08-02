import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  membersList: [],
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setMembersList: (state, action) => {
      state.membersList = action.payload;
    },
  },
});

export const { setMembersList } = membersSlice.actions;

export default membersSlice.reducer;