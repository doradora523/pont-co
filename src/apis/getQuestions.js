import { createAsyncThunk } from '@reduxjs/toolkit';

export const getQuestions = createAsyncThunk('questions/getQuestions', async (factualInfo, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'https://pont-api.onrender.com/api/v1/prediction/39752542-afa7-42c5-a7b1-e0867c7a8ad3',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: factualInfo }),
      },
    );
    const result = await response.json();

    const questions = [];
    const lines = result.split('\n');

    lines.forEach((line) => {
      if (line.startsWith('칭찬:')) {
        const praise = line.slice(4).trim();
        if (!questions.includes(praise)) {
          questions.push(praise);
        }
      }
    });

    return questions;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
