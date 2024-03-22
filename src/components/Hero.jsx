/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useSpring, animated } from "react-spring";
import useTypewriter from "react-typewriter-hook";

const Hero = ({ about }) => {
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const typedText = useTypewriter(about.title);

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800, delay: 200 },
  });

  return (
    <section id="home" className="container-fluid mx-auto mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <animated.div style={textAnimation}>
              <div className="hero-content text-center text-lg-start">
                <h1 className="display-2 fw-bold">
                  <pre className="fs-6 m-0 text-body-secondary">I am</pre>
                  {typedText}
                </h1>
                <p className="mt-4 text-body-secondary fw-regular">
                  Hi, I am <strong>{about.name}. </strong> {about.subtitle}
                  {about.description}
                </p>
                <div>
                  <span className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-6">
            <animated.div style={imageAnimation}>
              <div className="hero-image d-flex justify-content-center">
                <div className="image-container overflow-hidden rounded-circle border border-dark-50">
                  <img
                    src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
                    alt=""
                    className="img-fluid object-fit-cover"
                  />
                  <div className="border-effect" />
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
