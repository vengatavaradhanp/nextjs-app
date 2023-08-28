import React from "react";
import UserAdd from "../assets/icons/UserAdd.svg";
import Server from "../assets/icons/Server.svg";
import Target from "../assets/icons/Target.svg";
import Percent from "../assets/icons/Percent.svg";
import CPUChip from "../assets/icons/CPUChip.svg";
import Image1 from "../assets/images/Image1.svg";
import Image2 from "../assets/images/Image2.svg";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Dolor Sit",
    icon: UserAdd,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: null,
    offset: false,
    span: 1,
  },
  {
    id: 2,
    title: "Lorum Ipsum Dolor Sit",
    icon: Server,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: null,
    offset: false,
    span: 1,
  },
  {
    id: 3,
    title: "Lorum Ipsum Dolor Sit",
    icon: Target,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: Image1,
    offset: false,
    span: 1,
  },
  {
    id: 4,
    title: "Lorum Ipsum",
    icon: Percent,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: null,
    offset: false,
    span: 1,
  },
  {
    id: 5,
    title: "Dolor Sit Amet",
    icon: CPUChip,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: null,
    offset: false,
    span: 1,
  },
  {
    id: 6,
    title: "",
    icon: null,
    description:
      "",
    image: Image2,
    offset: true,
    span: 1,
  },
  {
    id: 7,
    title: "Dolor Ipsum Dolor",
    icon: CPUChip,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: null,
    offset: false,
    span: 1,
  },
 
];

export default function DolorSit(): React.JSX.Element {
  return (
    <article className="m-5">
      <div>
        <h1 className="text-8xl font-bold tracking-wider uppercase">
          Lorem Ipsum
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 sm:grid-cols-1">
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
            {item.icon !== null && (<div className="my-5">
              <Image src={item.icon} alt="no-image" />
            </div>)}
          </div>
        ))}
      </div>
    </article>
  );
}
