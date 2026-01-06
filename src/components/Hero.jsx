import { Link } from 'react-router-dom'
import { FiHeart, FiUsers, FiShield, FiArrowRight } from 'react-icons/fi'

function Hero() {
    return (
        <section className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in-up">
                        <span className="hero-badge-dot"></span>
                        Nonprofit Organization
                    </div>

                    <h1 className="hero-title animate-fade-in-up animate-delay-1">
                        Empowering Lives,<br />
                        <span className="hero-title-accent">Fostering Independence</span>
                    </h1>

                    <p className="hero-description animate-fade-in-up animate-delay-2">
                        Sierra Environmental and Social Services Inc. is a positive nonprofit
                        organization dedicated to supporting people with developmental disabilities
                        through compassionate, person-centered care.
                    </p>

                    <div className="hero-cta animate-fade-in-up animate-delay-3">
                        <Link to="/services" className="btn btn-primary">
                            Our Services
                            <FiArrowRight />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>

                    <div className="hero-stats animate-fade-in-up animate-delay-4">
                        <div className="hero-stat">
                            <div className="hero-stat-value">17+</div>
                            <div className="hero-stat-label">Years of Service</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">5</div>
                            <div className="hero-stat-label">California Regions</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">24/7</div>
                            <div className="hero-stat-label">Care Support</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in-up animate-delay-2">
                    <div className="hero-image-wrapper">
                        <div className="hero-image-shape">
                            <div className="hero-image-content">
                                <div className="hero-image-icon">
                                    <FiHeart />
                                </div>
                                <div className="hero-image-text">
                                    Compassionate Care
                                </div>
                            </div>
                        </div>

                        <div className="hero-floating-card card-1">
                            <div className="floating-card-icon">
                                <FiUsers />
                            </div>
                            <span className="floating-card-text">Community Support</span>
                        </div>

                        <div className="hero-floating-card card-2">
                            <div className="floating-card-icon">
                                <FiShield />
                            </div>
                            <span className="floating-card-text">Safe Environment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
