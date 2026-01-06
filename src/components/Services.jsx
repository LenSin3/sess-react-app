import { FiHome, FiBriefcase, FiUsers, FiSun, FiShield } from 'react-icons/fi'

function Services() {
    const services = [
        {
            icon: <FiHome />,
            title: "Residential Support",
            description: "Providing safe and supportive living environments where individuals can thrive with dignity and comfort.",
            number: "01"
        },
        {
            icon: <FiBriefcase />,
            title: "Employment Services",
            description: "Job training and placement assistance to help individuals achieve meaningful employment and independence.",
            number: "02"
        },
        {
            icon: <FiUsers />,
            title: "Community Integration",
            description: "Helping individuals participate in community activities and build meaningful social connections.",
            number: "03"
        },
        {
            icon: <FiSun />,
            title: "Day Programs",
            description: "Engaging activities and skill-building opportunities that promote personal growth and development.",
            number: "04"
        },
        {
            icon: <FiShield />,
            title: "Behavioral Support",
            description: "Personalized plans to address behavioral challenges with compassion and evidence-based approaches.",
            number: "05"
        }
    ]

    return (
        <section className="services section">
            <div className="container">
                <div className="services-header">
                    <span className="services-label">What We Offer</span>
                    <h1 className="services-title">
                        Comprehensive Care Services
                    </h1>
                    <p>
                        We provide a full range of services designed to support individuals
                        with developmental disabilities in achieving their fullest potential.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <span className="service-card-number">{service.number}</span>
                            <div className="service-card-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-description">{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services
