import React from "react";
import { InfoComponent} from "../../components";
import { homeObjThree } from "./Data";

const Home = () => {
  return (
    <>
      <InfoComponent {...homeObjThree} />
    </>
  );
};

export default Home;
