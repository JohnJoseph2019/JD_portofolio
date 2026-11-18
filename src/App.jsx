import './App.css';
import {Routes, Route} from 'react-router-dom';
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
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<ContactMe />} />
            </Routes>
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
