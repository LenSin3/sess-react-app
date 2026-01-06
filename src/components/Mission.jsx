import { FiCheck } from 'react-icons/fi'

function Mission() {
    const values = [
        "Honoring clients' self-determination and personal choices",
        "Delivering quality support with person-centered approaches",
        "Providing flexible staffing ratios under California regulations",
        "Supporting individuals with complex behavioral needs"
    ]

    return (
        <section className="mission section">
            <div className="container mission-container">
                <div className="mission-visual">
                    <div className="mission-quote-box">
                        <p className="mission-quote">
                            "The mission of our agency is to provide 24-hour, non-medical care
                            to individuals with developmental disabilities who require enhanced
                            behavioral supports."
                        </p>
                    </div>
                </div>

                <div className="mission-content">
                    <span className="mission-label">Our Mission</span>
                    <h2 className="mission-title">
                        Dedicated to Making a Difference
                    </h2>
                    <p className="mission-description">
                        We believe in empowering individuals to lead fulfilling lives through
                        compassionate care and unwavering support. Our team works tirelessly
                        to create an environment where every person can thrive.
                    </p>

                    <div className="mission-values">
                        {values.map((value, index) => (
                            <div className="mission-value" key={index}>
                                <div className="mission-value-icon">
                                    <FiCheck size={14} />
                                </div>
                                <span className="mission-value-text">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
