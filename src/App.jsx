import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Projects />
    </div>
  );
}

export default App;
