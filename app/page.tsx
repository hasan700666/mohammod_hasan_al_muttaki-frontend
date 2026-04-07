import React from "react";
import Hero from "./components/Hero";
import PainPoint from "./components/PainPoint";
import Benefits from "./components/Benefits";

const page = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <PainPoint></PainPoint>
      </div>
      <div>
        <Benefits></Benefits>
      </div>
    </div>
  );
};

export default page;
