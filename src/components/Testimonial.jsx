/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./Testimonial.css";

const Testimonial = ({ testimonials }) => {
  console.log(testimonials);
  return (
    <section className="container-fluid bg-dark text-light py-5">
      <div className="container">
        <h1 className="fw-bold text-center mb-5">Testimonials</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testimonials.map((testimonial) => (
            <div className="col" key={testimonial._id}>
              <div className="testimonial-item hvr-grow d-flex flex-column h-100">
                <div className="mb-3">
                  <p className="">"{testimonial.review}"</p>
                </div>
                <div className="details mt-auto">
                  <h3 className="author fw-bold fs-2">{testimonial.name}</h3>
                  <h3 className="job text-secondary fw-regular">
                    {testimonial.position}
                  </h3>
                </div>
                <div className="avatar">
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url("${testimonial.image.url}")`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
