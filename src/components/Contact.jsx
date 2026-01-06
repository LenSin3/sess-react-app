import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <section className="contact section">
            <div className="container contact-container">
                <div className="contact-info">
                    <span className="contact-label">Get In Touch</span>
                    <h1 className="contact-title">
                        Let's Start a Conversation
                    </h1>
                    <p className="contact-description">
                        We're here to answer your questions and discuss how we can
                        support you or your loved ones. Reach out today.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <FiPhone />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Phone</span>
                                <span className="contact-item-value">
                                    <a href="tel:844-266-6780">844-266-6780</a>
                                    <br />
                                    <a href="tel:510-205-1448">510-205-1448</a>
                                </span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <FiMail />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Email</span>
                                <span className="contact-item-value">
                                    <a href="mailto:info@sierrases.org">info@sierrases.org</a>
                                </span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <FiMapPin />
                            </div>
                            <div className="contact-item-content">
                                <span className="contact-item-label">Address</span>
                                <span className="contact-item-value">
                                    27997 High Country Drive<br />
                                    Hayward, CA 94542
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'var(--teal-light)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--teal-deep)',
                                fontSize: '1.5rem'
                            }}>
                                <FiSend />
                            </div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Thank You!</h3>
                            <p>We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-input"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-input"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-submit">
                                Send Message
                                <FiSend />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact
