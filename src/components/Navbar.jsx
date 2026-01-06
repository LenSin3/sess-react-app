import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                <Link to="/" className="nav-brand">
                    <div className="nav-brand-icon">S</div>
                    <div className="nav-brand-text">
                        <span className="nav-brand-name">SESS</span>
                        <span className="nav-brand-tagline">Care Services</span>
                    </div>
                </Link>

                <ul className="nav-links">
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
                    <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
                    <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
                </ul>

                <div className="nav-cta">
                    <a href="tel:844-266-6780" className="nav-phone">
                        <FiPhone className="nav-phone-icon" />
                        <span>844-266-6780</span>
                    </a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
