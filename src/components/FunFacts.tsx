"use client";
import { useState } from "react";
import Link from "next/link";

import VideoPlayer from "./ui/VideoPlayer";

export default function FunFacts() {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="5xl text-white h-[100vh] items-center flex bg-black">
      <div className="mt-[-50vh]" id="funfacts"></div>
      <div className="bg-black w-[40%] h-[25vh] absolute rounded-[5vh] top-[290vh] right-[10vw] text-center text-white flex flex-col pt-6">
        <div className="text-6xl font-extrabold">FUN FACTS</div>
        <div className="text-xl">to know more about massage therapy</div>
      </div>
      <div className="flex flex-row justify-center items-center w-screen text-center p-10 gap-10">
        <div className="w-[25%] h-[60vh] bg-white flex flex-col ">
          <VideoPlayer vdoSrc="/vdo/massage.mp4" isPlaying={playing} />
          <div className="text-black font-bold p-5 text-center">
            Massage in Thailand
            <Link href={"https://www.youtube.com/watch?v=Tip_ZMa8oC0"}>
              <button className="bg-gray-200 p-2 ml-2 text-sm text-gray-500 rounded-3xl">
                {" "}
                Watch More{" "}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[50%]  ">
          <div className="flex flex-row gap-10">
            <div className="w-[100%] bg-white flex flex-col p-5 justify-center items-center h-[40%]">
              <img src="/img/funfacts1.jpg" className="p-3 w-[80%]" />
              <div className="text-center text-black font-bold">
                {" "}
                5 of the Best Massage Techniques to Relieve Stress and Anxiety{" "}
              </div>
            </div>
            <div className="w-[100%] bg-white flex flex-col p-5 justify-center items-center h-[40%]">
              <img src="/img/funfacts1.jpg" className="p-3 w-[80%]" />
              <div className="text-center text-black "> Add detail </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 ">
            <div className="flex flex-row gap-10">
              <div className="w-[100%] bg-white flex flex-row p-5 justify-around items-center">
                <img src="/img/funfacts1.jpg" className="p-3 w-[40%]" />
                <div className="text-center text-black "> Add detail </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
