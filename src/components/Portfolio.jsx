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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
                cursor: "pointer",
              }}
              onClick={() => handleProjectClick(project)}
            >
              <AnimatedImage src={project.image.url} alt="Project" />
              <p className="my-3 fw-regular text-info text-center">
                {project.techStack.join(", ")}
              </p>
              <p className="fw-bold fs-5 text-center">{project.title}</p>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <AnimatedImage
                    src={selectedProject.image.url}
                    alt={selectedProject.title}
                  />
                  <p>Description: {selectedProject.description}</p>
                  <p>Tech Stack: {selectedProject.techStack.join(", ")}</p>
                  <p>GitHub URL: {selectedProject.githuburl}</p>
                  <p>Live URL: {selectedProject.liveurl}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedProject && (
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
