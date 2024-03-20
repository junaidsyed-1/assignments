/* eslint-disable react/prop-types */
import { useState } from "react";
import { animated } from "react-spring";
import "./Services.css";

const Services = ({ services }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section>
      <div className="container-fluid bg-dark text-light py-4">
        <div className="container">
          <h1 className="text-center">My Services</h1>
          <div className="row justify-content-center">
            {services.map((service) => (
              <div
                key={service._id}
                className="card position-relative m-2 col-lg-3 col-md-6 col-sm-12"
                onMouseEnter={() => handleMouseEnter(service._id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={service.image.url}
                  className="card-img-top"
                  alt="..."
                />
                <animated.div
                  className="bg-overlay"
                  style={{
                    opacity: hoveredCard === service._id ? 0.5 : 0,
                  }}
                />
                <animated.div
                  className="card-body w-100 text-center"
                  style={{
                    opacity: hoveredCard === service._id ? 1 : 0,
                    transform:
                      hoveredCard === service._id
                        ? "translate(-50%, -50%) scale(1)"
                        : "translate(-50%, -50%) scale(0.8)",
                  }}
                >
                  <h5 className="card-title fw-bold fs-1">{service.name}</h5>
                  <p className="card-text lh-base fs-5 fw-regular">
                    {service.desc}
                  </p>
                  <a href="#" className="btn btn-primary d-block">
                    {service.charge}
                  </a>
                </animated.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
