"use client";

import { registerLink } from "@/constant/link.constant";
import { navContents } from "@/constant/nav.constant";
import Link from "next/link";
import homeIcon from "public/img/home.png";
import Image from "next/image";

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
    <nav className="inset-x-0 top-0 z-30 h-14 w-full border-b-[0.5px] text-primary backdrop-blur-lg transition-all">
      <div className="fixed sticky flex h-14 items-center justify-between">
        <div className="space-x-y hidden items-center text-white sm:flex gap-10">
          <Image
            src={homeIcon}
            alt="Home Icon"
            width={0}
            height={0}
            className="w-8 ml-5"
          />
          {navContents.map((e) => (
            <a
              href={e.path}
              key={e.name}
              onClick={(event) => handleClick(event, e.path)}
            >
              <div className="text-white">{e.name}</div>
            </a>
          ))}
        </div>
        {/* TODO: add mobile navbar */}
      </div>
    </nav>
  );
}
