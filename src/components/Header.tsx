import Image from "next/image";
import React from "react";
import logo from "../assets/images/Logo.svg";
import menu from "../assets/icons/BergerMenu.svg";

export default function Header(): React.JSX.Element {
  return (
    <header className="bg-black">
      <div className="flex flex-row p-4 items-center">
        <div className="cursor-pointer">
          <Image src={logo} alt="logo" />
        </div>
        <div className="cursor-pointer w-full">
          <h5 className="text-white font-semibold text-xl px-4">Lorem</h5>
        </div>
        <div className="cursor-pointer text-end xl:hidden lg:hidden md:hidden sm:block">
          <Image src={menu} alt="menu" />
        </div>
      </div>
    </header>
  );
}
