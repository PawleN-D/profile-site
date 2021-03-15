import React from "react";
import { InfoComponent } from "../../components";
import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <InfoComponent {...homeObjOne} />
    </>
  );
};

export default Home;
