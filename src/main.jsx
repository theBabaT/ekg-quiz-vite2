import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QuestionProvider } from './context/QuestionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuestionProvider>
    <App />
  </QuestionProvider>
);
