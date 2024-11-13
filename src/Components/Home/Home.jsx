import React from "react";
import Hero from "./Hero/Hero";
import Company from "./Company/Company";
import Counter from "./Counter/Counter";
import CaseStudies from "./CaseStudies/CaseStudies";
import Services from "./Services/Services";
import Innovation from "./Innovation/Innovation";
import Application from "./Application/Application";
import Choose from "./Choose/Choose";
import Community from "./Community/Community";
import Articles from "./Articles/Articles";
import PerfectSolution from "./perfectSolution/PerfectSolution";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <>
      <Hero />
      <Company />
      <Counter />
      <CaseStudies />
      <Services />
      <Innovation />
      <Application />
      <PerfectSolution />
      <Choose />
      <Community />
      <Articles />
      <ClientReview />
    </>
  );
};

export default Home;
