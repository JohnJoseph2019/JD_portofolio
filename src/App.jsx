import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
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
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={ContactMe} />
            </Switch>
            <Footer />
            {/* <MainPage />
            <Projects />
            <ContactForm />
            <ContactMe />
            <Footer /> */}
        </div>
    );
}

export default App;
