import React from "react";
import { InfoComponent, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoComponent {...homeObjOne} />
      <InfoComponent {...homeObjTwo} />
      <InfoComponent {...homeObjThree} />
      <Pricing />
      <InfoComponent {...homeObjFour} />
    </>
  );
};

export default Home;
