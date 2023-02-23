import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
