import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'
import './App.css'

function HomePage() {
    return (
        <>
            <Hero />
            <Mission />
        </>
    )
}

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
