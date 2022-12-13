import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Components/HomePage/Hometext';
import FormBlank from './Components/FormPage/FormBlank';
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <HomePage />
      <FormBlank />
    </div>
  );
}
root.render(<App />);