import { useState } from "react";

export const useAnsweredQuestions = (initialState, totalQuestions) => {
  const [answeredQuestions, setAnsweredQuestions] = useState(initialState);

  const nextQuestion = () => setAnsweredQuestions((prev) => prev + 1);
  const isLastQuestion = () => answeredQuestions >= totalQuestions;

  return { answeredQuestions, nextQuestion, isLastQuestion };
};
