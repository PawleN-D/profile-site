import React from "react";
import { InfoComponent, Pricing } from "../../components";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoComponent {...homeObjTwo} />
      <InfoComponent {...homeObjThree} />
      <Pricing />
      <InfoComponent {...homeObjFour} />
    </>
  );
};

export default Home;
