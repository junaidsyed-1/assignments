/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  const imageAnimation = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
  });

  return (
    <animated.img
      src={src}
      alt={alt}
      className="img-fluid rounded mx-auto d-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={imageAnimation}
    />
  );
};

const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="container-fluid py-4">
      <div className="container">
        <h1 className="text-center fw-bold">My Projects</h1>
        <div className="row">
          <div className="col text-center mt-2">
            <ul className="list-inline ">
              <li className="list-inline-item mx-2 fw-semibold text-secondary lis">
                All
              </li>
              <li className="list-inline-item mx-2 fw-semibold text-secondary lis">
                Reactjs
              </li>
              <li className="list-inline-item mx-2 fw-semibold text-secondary lis">
                NextJs
              </li>
              <li className="list-inline-item mx-2 fw-semibold text-secondary lis">
                Mern
              </li>
              <li className="list-inline-item mx-2 fw-semibold text-secondary lis">
                CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {projects.map((project) => (
            <div
              key={project._id}
              className="mx-auto my-2 bg-dark rounded p-3 text-white shadow-lg"
              style={{
                width: "calc(100% - 20px)",
                maxWidth: "400px",
                margin: "0 10px 20px 10px",
                boxSizing: "border-box",
              }}
            >
              <AnimatedImage src={project.image.url} alt="Project" />
              <p className="my-3 fw-regular text-info text-center">
                {project.techStack.join(", ")}
              </p>
              <p className="fw-bold fs-5 text-center">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
