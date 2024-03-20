import useInfo from "../utils/useInfo";
import Hero from "./Hero";
import Services from "./Services";

const Body = () => {
  const info = useInfo();

  if (!info) return;

  const { user } = info;

  return (
    <div>
      <Hero about={user.about} />
      <Services services={user.services} />
    </div>
  );
};

export default Body;
