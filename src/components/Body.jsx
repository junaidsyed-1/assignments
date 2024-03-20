import useInfo from "../utils/useInfo";
import Hero from "./Hero";

const Body = () => {
  const info = useInfo();

  if (!info) return;

  const { user } = info;

  return (
    <div>
      <Hero about={user.about} />
    </div>
  );
};

export default Body;
