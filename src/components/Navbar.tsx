"use client";
import { navContents } from "@/constant/nav.constant";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

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
              src={"/img/home.png"}
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
        <div className="flex items-center mr-[10vw]">
          {session ? (
            <Link href={"/reservation"}>
              <button className="mr-5 bg-black text-white px-5 py-2 rounded-3xl">
                Book NOW
              </button>
            </Link>
          ) : (
            <Link href={"/api/auth/signin"}>
              <button className="mr-5 bg-black text-white px-5 py-2 rounded-3xl">
                Book NOW
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
