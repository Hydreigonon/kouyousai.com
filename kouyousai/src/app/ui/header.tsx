"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "@/img/cINemaTTiC-logo.jpg";
import bars from "@/img/bars-solid.svg";
import xmark from "@/img/xmark-solid.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  const data = [
    { 
      name: "Home", 
      link: "/",
    },
    {
      name: "About",
      link: "/about"
    },
  ];
  console.log(data);

  return(
    <nav className="flex">
      <div className="flex-none sm:frex-1 md:flex-1 lg:flex-1 xl:flex-1">
        <Link href="/">
          <Image src={logo} alt="cINemaTTiC-logo" width={100} height={100} />
        </Link>
      </div>

      {openMenu ? (
      <div className="w-full font-bold mt-20 absolute z-10 w-100">
        <ul className="md:flex flex-initial text-center bg-slate-100 opacity-85">
          {data.map((value, index) => (
            <li key={index} className="p-4 my-1 bg-white">
              <Link href={value.link}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      ) : undefined}
      <button onClick={menuFunction} className="flex-initial absolute top-3 right-3 md:hidden">
        {openMenu ? (
            <Image src={xmark} alt="menu-xmark" width={50} height={50} />
          ) : (
            <Image src={bars} alt="menu-bars" width={50} height={50} />
          )
        }
        
      </button>
    </nav>
    // <nav className="md:nav md:bg-gray-600 bg-green-300">
    //   <ul className="lg:px-10 lg:h-14 lg:flex list-none mx-auto">
    //     <li className="text-white py-3 pr-10 block text-xl transition duration-300 ease-in-out hover:text-blue-400">
    //       <Link href="/about" className="no-underline">
    //         About
    //       </Link>
    //     </li>
    //     <li className="text-white py-3 pr-10 block text-xl transition duration-300 ease-in-out hover:text-blue-400">
    //       <Link href="/">
    //         Event
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}