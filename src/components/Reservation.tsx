"use client";
import Card from "./ui/Card";
import { SwipeCarousel } from "./ui/SwipeCarousel";

export default function Reservation() {
  return (
    <div className="px-10 h-[190vh] bg-white">
      <div
        className="text-8xl font-bold  5xl text-black  py-[20vh] text-end flex flex-col"
        id="myreservation"
      >
        <div className="">WELCOME,</div>
        <div className="mt-5">USER</div>
        <div className="mt-5">TO OUR SERVICES</div>
      </div>
      <div className="">
        <div className="text-4xl font-bold text-black">OUR SERVICES</div>
        <div className="mt-10 flex justify-center items-center">
          {" "}
          <SwipeCarousel />{" "}
        </div>
      </div>
    </div>
  );
}
