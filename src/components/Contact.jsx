/* eslint-disable react/prop-types */

const Contact = ({ about }) => {
  return (
    <section id="contact" className="container-fluid py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact-info ">
              <h2 className="text-center fw-bold fs-1 mb-3">
                Contact Information
              </h2>
              <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between">
                <div className="mb-3 mb-lg-0">
                  <p>
                    <strong>Address:</strong> {about.about.address}
                  </p>
                </div>
                <div className="mb-3 mb-lg-0">
                  <p>
                    <strong>Email:</strong> {about.email}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Phone:</strong> {about.about.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
