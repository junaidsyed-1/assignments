/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(i);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="container-fluid bg-dark text-light py-5"
    >
      <div className="container">
        <h1 className="fw-bold text-center mb-5">Testimonials</h1>
        <div className="row">
          <div className="col">
            <div className="testimonial-item hvr-grow d-flex flex-column h-100">
              <div className="mb-3">
                <p className="">"{testimonials[currentTestimonial].review}"</p>
              </div>
              <div className="details mt-auto">
                <h3 className="author fw-bold fs-2">
                  {testimonials[currentTestimonial].name}
                </h3>
                <h3 className="job text-secondary fw-regular">
                  {testimonials[currentTestimonial].position}
                </h3>
              </div>
              <div className="avatar">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url("${testimonials[currentTestimonial].image.url}")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
