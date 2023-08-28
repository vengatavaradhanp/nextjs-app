import React, { useState } from "react";
import Image from "next/image";
import Add from "../assets/icons/Add.svg";
import Minus from "../assets/icons/Minus.svg";

const data = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor Sit Amen",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="xl:my-32 sm:my-2 mx-0">
      <div className="text-center">
        <h1 className="text-8xl font-bold tracking-wider uppercase ">
          Lorem Ipsum Dolor
        </h1>
      </div>
      <div className="my-8">
        {data.map((item, index) => (
          <div className="my-3"  key={index}>
            <div
              className={`${
                activeIndex === index &&
                "bg-gradient-to-r from-purple-500 to-pink-500"
              } px-4`}
            >
              <div
                onClick={() => activeIndex !== index ? setActiveIndex(index) : setActiveIndex(null)}
                className="cursor-pointer xl:w-8/12 sm:11/12 m-auto"
              >
                <div
                  className={`flex flex-row h-10 items-center justify-between `}
                >
                  <div className="basis-11/12 uppercase font-semibold tracking-wider">
                    {item.title}
                  </div>
                  <div className="basis-auto text-end" >
                    {activeIndex !== index ? (
                      <Image src={Add} alt="no_image" />
                    ) : (
                      <Image src={Minus} alt="no_image" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {activeIndex === index && (
              <div className="xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-full m-auto my-2 px-4">
                <p className="text-zinc-400">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
