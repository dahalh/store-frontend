import React from "react";
import MenWomen from "../../components/Banners/MenWomen";
import CatCards from "../../components/CategoryCards/CatCards";
import Slider from "../../components/Slider/Slider";
import DefaultLayout from "../layouts/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <Slider />
      <CatCards />
      <MenWomen />
    </DefaultLayout>
  );
};
