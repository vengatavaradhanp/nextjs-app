import React from "react";
import ShieldTick from "../assets/icons/ShieldTick.svg";
import Dataflow from "../assets/icons/Dataflow.svg";
import BarChartCircle from "../assets/icons/BarChartCircle.svg";
import Image4 from "../assets/images/Image4.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    icon: ShieldTick,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: null,
    offset: false,
    span: 1,
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    icon: Dataflow,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: null,
    offset: false,
    span: 2,
  },
  {
    id: 6,
    title: "",
    icon: null,
    description: "",
    image: Image4,
    offset: true,
    span: 1,
  },
  {
    id: 7,
    title: "Dolor Ipsum Dolor",
    icon: BarChartCircle,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: null,
    offset: false,
    span: 1,
  },
];

export default function DolorSet(): React.JSX.Element {
  return (
    <article className="m-5">
      <div>
        <h1 className="text-8xl font-bold tracking-wider uppercase">
          Lorem Ipsum <br /> Dolor Set
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={item.offset ? `xl:col-start-2 col-span-${item.span}` : ``}
          >
            {item.image !== null && (
              <div className="pb-5">
                <Image
                  className="w-full h-full"
                  src={item.image}
                  alt="no-image"
                />
              </div>
            )}
            <div className="uppercase font-semibold tracking-wider">
              <h6>{item.title}</h6>
            </div>
            <div>
              <p className="text-zinc-400">{item.description}</p>
            </div>
            {item.icon !== null && (
              <div className="my-5">
                <Image src={item.icon} alt="no-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
