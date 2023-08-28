import React from "react";
import Image from "next/image";
import Image3 from "../assets/images/Image3.svg";

export default function AboutUs(): React.JSX.Element {
  return (
    <article className="mt-48 mx-0">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="xl:block sm:flex sm:justify-center ">
          <h1 className="text-8xl font-bold tracking-wider uppercase ">
            About <br /> Us
          </h1>
          <div className="xl:relative xl:bottom-24 xl:left-44 lg:relative md:relative sm:relative"  >
            <Image
              className="w-60 h-60 rounded-full"
              src={Image3}
              alt="no-image"
            />
          </div>
        </div>

        <div>
          <p className="text-zinc-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry`s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry`s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-row">
        <div className="xl:basis-1/2">
          <h1 className="text-8xl font-bold tracking-wider uppercase ">
            About <br /> Us
          </h1>
          <div style={{ position: "relative", right: "-180px", top: "-105px" }}>
            <Image
              className="w-60 h-60 rounded-full"
              src={Image3}
              alt="no-image"
            />
          </div>
        </div>
        <div className="xl:basis-1/2 ">
          <p className="text-zinc-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div> */}
    </article>
  );
}
