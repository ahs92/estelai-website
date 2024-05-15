import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <main className="mt-16">
                <Home />
                <AboutUs />
                <Services />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;