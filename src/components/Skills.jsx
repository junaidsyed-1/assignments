/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Skills.css";

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="container-fluid bg-dark text-white">
      <div className="container">
        <div className="skills-section">
          <h1 className="fw-bold text-center py-3 skills-header">My Skills</h1>
          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill._id} className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img
                      src={skill.image.url}
                      alt="Image"
                      className="skills-icons"
                    />
                  </div>
                  <h3 className="text-light">
                    {skill.name}{" "}
                    <span className="fs-5 text-secondary">
                      {skill.percentage}%
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
