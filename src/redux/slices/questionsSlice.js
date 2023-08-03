import { createSlice } from '@reduxjs/toolkit';
import { getFactualInfo } from '../../apis/getFactualInfo';
import { getQuestions } from '../../apis/getQuestions';

const initialState = {
  factualInfo: null,
  questions: [],
  status: '',
  error: null,
  loading: false,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      if (!state.questions.includes(action.payload)) {
        state.questions = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFactualInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFactualInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.factualInfo = action.payload;
      })
      .addCase(getFactualInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { addQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
