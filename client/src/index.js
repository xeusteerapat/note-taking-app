import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/pages/LandingPage';
import './assets/main.css';

const App = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
