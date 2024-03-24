/* eslint-disable react/prop-types */
import "./Contact.css";

const Contact = ({ about }) => {
  return (
    <section id="contact" className="container-fluid py-4">
      <div className="container">
        <h1 className="text-center fw-bold">Contact Me</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-info">
              <p className="contact-item">
                <strong>Address:</strong> {about.address}
              </p>
              <p className="contact-item">
                <strong>Email:</strong> {about.email}
              </p>
              <p className="contact-item">
                <strong>Phone:</strong> {about.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
