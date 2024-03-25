"use client";

import { navContents } from "@/constant/nav.constant";
import homeIcon from "public/img/home.png";
import unknown from "public/img/unknown.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1)); // Assuming your section IDs start with "#"
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <nav className="inset-x-0 bg-white top-0 z-30 h-14 w-full border-b-[0.5px] text-primary backdrop-blur-lg transition-all">
      <div className="fixed sticky flex h-14 items-center justify-between">
        <div className="space-x-y hidden items-center text-white sm:flex gap-10">
          <a
            href="#home"
            key="home"
            onClick={(event) => handleClick(event, "#home")}
          >
            <Image
              src={homeIcon}
              alt="Home Icon"
              width={0}
              height={0}
              className="w-8 ml-5"
            />
          </a>
          {navContents.map((e) => (
            <a
              href={e.path}
              key={e.name}
              onClick={(event) => handleClick(event, e.path)}
            >
              <div className="text-black">{e.name}</div>
            </a>
          ))}
        </div>
        <div className="flex items-center mr-5">
          <Link href={"/reservation"}>
            <button className="mr-5 bg-black text-white px-5 py-2 rounded-3xl">
              Book NOW
            </button>
          </Link>
          <Image
            src={unknown}
            alt="Home Icon"
            width={0}
            height={0}
            className="w-8 mr-2"
          />
          <div className="mr-5 text-black">username</div>
        </div>
      </div>
    </nav>
  );
}
