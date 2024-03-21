import useInfo from "../utils/useInfo";
import About from "./About";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

const Body = () => {
  const info = useInfo();

  if (!info) return;

  const { user } = info;

  return (
    <div>
      <Hero about={user.about} />
      <Services services={user.services} />
      <Portfolio projects={user.projects} />
      <Skills skills={user.skills} />
      <About about={user.about} />
      <Testimonial testimonials={user.testimonials} />
    </div>
  );
};

export default Body;
