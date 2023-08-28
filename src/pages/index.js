import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import DolorSit from "../components/DolorSit";
import AboutUs from "../components/AboutUs";
import Slide from "../components/Slide";
import DolorSet from "../components/DolorSet";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <section className="m-auto mt-20 xl:w-8/12 lg:w-10/12 md:w-11/12 sm:w-full">
        <DolorSit />
        <AboutUs />
      </section>
      <Slide />
      <section className="m-auto mt-20 xl:w-8/12 lg:w-10/12 md:w-11/12 sm:w-full">
        <DolorSet />
      </section>
      <Accordion />
    </React.Fragment>
  );
}
