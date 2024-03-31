/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
const About = ({ about }) => {
  return (
    <section id="about" className="container-fluid py-3 position-relative">
      <div className="container">
        <h1 className="fw-bold text-center mb-4">About Me</h1>
        <div className="row">
          <div className="col-lg-6 col-sm-12 text-center">
            <img
              src={about.avatar.url}
              className="object-fit rounded-circle border border-warning "
              alt="Image"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "500px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-lg-6 col-sm-12 text-left">
            <h4 className="fw-bold fs-1 text-warning-emphasis">
              {about.subTitle}
            </h4>
            <p className="fw-regular fs-5 text-secondary mt-3 lh-base">
              {about.description}
            </p>
            <h1 className="fs-1 fw-bold">{about.name}</h1>
            <p className="">
              <strong> Contact:</strong> {about.phoneNumber}
              <strong className="mx-1"> Address: </strong> {about.address}
            </p>
            <button className="btn btn-primary btn-lg">Download CV</button>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center text-center ">
        <h1
          className="display-1 text-dark  font-watermark"
          style={{ transform: "rotate(-10deg)" }}
        >
          {about.title}
        </h1>
      </div>
    </section>
  );
};
export default About;
