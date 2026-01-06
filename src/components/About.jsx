import { FiClock, FiAward, FiTarget, FiHeart } from 'react-icons/fi'

function About() {
    const cards = [
        {
            icon: <FiClock />,
            title: "17+ Years of Excellence",
            text: "Over seventeen years of dedicated service to our communities, building trust and delivering results."
        },
        {
            icon: <FiAward />,
            title: "Rapid Processing",
            text: "Known for our effectiveness in initial evaluations, getting clients the support they need quickly."
        },
        {
            icon: <FiTarget />,
            title: "Person-Centered Care",
            text: "We go beyond standard service documentation to provide truly personalized assistance."
        },
        {
            icon: <FiHeart />,
            title: "Advocacy & Support",
            text: "We advocate for better futures and improved quality of life for all individuals we serve."
        }
    ]

    const regions = [
        "Alameda",
        "Contra Costa",
        "San Francisco",
        "Santa Clara",
        "Valley Mountains"
    ]

    return (
        <section className="about section">
            <div className="container">
                <div className="about-header">
                    <span className="about-label">About Us</span>
                    <h1 className="about-title">
                        Enriching Lives, Fostering Independence
                    </h1>
                    <p>
                        Sierra Environmental and Social Services Inc. is dedicated to creating
                        positive environmental and social impact through compassionate care
                        and community engagement.
                    </p>
                </div>

                <div className="about-grid">
                    {cards.map((card, index) => (
                        <div className="about-card" key={index}>
                            <div className="about-card-icon">
                                {card.icon}
                            </div>
                            <h3 className="about-card-title">{card.title}</h3>
                            <p className="about-card-text">{card.text}</p>
                        </div>
                    ))}

                    <div className="about-card about-highlight">
                        <div className="about-highlight-icon">
                            <FiHeart />
                        </div>
                        <div className="about-highlight-content">
                            <h3>Our Commitment</h3>
                            <p>
                                "Delivering compassionate care and empowering individuals to lead
                                fulfilling lives. We are your trusted partner in support and advocacy."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-regions">
                    <h4 className="about-regions-title">Serving California Communities</h4>
                    <div className="about-regions-list">
                        {regions.map((region, index) => (
                            <span className="region-tag" key={index}>{region}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
