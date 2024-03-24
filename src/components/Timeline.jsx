/* eslint-disable react/prop-types */
import { useSpring, animated } from "react-spring";
import "./Timeline.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TimelineEntry = ({ entry }) => {
  const entryAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 400 },
  });

  return (
    <animated.li className="timeline-entry" style={entryAnimation}>
      <div className="timeline-card">
        <h3>{entry.company_name}</h3>
        <p className="date-range">
          {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
        </p>
        <p className="summary">{entry.summary}</p>
        <ul className="bullet-points">
          {entry.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </animated.li>
  );
};

const Timeline = ({ timeline }) => {
  const educationEntries = timeline.filter((entry) => entry.forEducation);
  const experienceEntries = timeline.filter((entry) => !entry.forEducation);

  return (
    <section id="timeline" className="container-fluid py-4">
      <div className="container">
        <h1 className="text-center fw-bold">Timeline</h1>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center">Education</h2>
            <ul className="timeline">
              {educationEntries.map((entry) => (
                <TimelineEntry key={entry._id} entry={entry} />
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <h2 className="text-center">Experience</h2>
            <ul className="timeline">
              {experienceEntries.map((entry) => (
                <TimelineEntry key={entry._id} entry={entry} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
