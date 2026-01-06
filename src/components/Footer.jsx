import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-icon">S</div>
                        <h3 className="footer-brand-name">
                            Sierra Environmental & Social Services
                        </h3>
                        <p className="footer-brand-description">
                            A positive nonprofit organization supporting people with developmental
                            disabilities through compassionate, person-centered care.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-column-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-column-title">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Residential Support</Link></li>
                            <li><Link to="/services">Employment Services</Link></li>
                            <li><Link to="/services">Community Integration</Link></li>
                            <li><Link to="/services">Day Programs</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-column-title">Contact</h4>
                        <div className="footer-contact-item">
                            <FiPhone size={16} />
                            <span>844-266-6780</span>
                        </div>
                        <div className="footer-contact-item">
                            <FiMail size={16} />
                            <span>info@sierrases.org</span>
                        </div>
                        <div className="footer-contact-item">
                            <FiMapPin size={16} />
                            <span>Hayward, CA 94542</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Sierra Environmental and Social Services Inc. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
