import React from "react";
import { InfoComponent } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoComponent {...homeObjOne} />
      <InfoComponent {...homeObjTwo} />
      <InfoComponent {...homeObjThree} />
      <InfoComponent {...homeObjFour} />
    </>
  );
};

export default Home;
