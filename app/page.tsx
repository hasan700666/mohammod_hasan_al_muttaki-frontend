import React from "react";
import Hero from "./components/Hero";
import PainPoint from "./components/PainPoint";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Curriculum from "./components/Curriculum";
import Curriculum2 from "./components/Curriculum2";

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
      <div>
        <Curriculum></Curriculum>
      </div>
      <div>
        <Curriculum2></Curriculum2>
      </div>
      <div>
        <CTA></CTA>
      </div>
    </div>
  );
};

export default page;
