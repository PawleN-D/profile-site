import React from "react";
import { InfoComponent, Pricing } from "../../components";
import { homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <Pricing />
      <InfoComponent {...homeObjFour} />
    </>
  );
};

export default Home;
