import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [sets, setSets] = useState([]);
  const [questions, setQuestions] = useState([]);

  const addSet = (name) => {
    if (!sets.includes(name)) {
      setSets([...sets, name]);
    }
  };

  const addQuestion = (question) => {
    console.log('Frage gespeichert:', question);
    setQuestions([...questions, question]);
  };

  return (
    <QuestionContext.Provider value={{ sets, addSet, questions, addQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};