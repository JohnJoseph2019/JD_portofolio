import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Projects />
      {/* <ContactForm /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
