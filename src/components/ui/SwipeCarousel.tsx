"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { allServices } from "@/constant/ourServices.constant";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === allServices.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && imgIndex > 0) {
        setImgIndex((pv) => pv - 1);
      } else if (
        event.key === "ArrowRight" &&
        imgIndex < allServices.length - 1
      ) {
        setImgIndex((pv) => pv + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalRef);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imgIndex, dragX, allServices.length]);

  return (
    <div className="relative overflow-hidden py-8 px-2">
      <motion.div
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `${
            `calc(-${imgIndex * 30}vh )` // Adding extra translation for the last image
          }`,
        }}
        transition={SPRING_OPTIONS}
        className="flex items-center hover:cursor-pointer"
      >
        {allServices.map((service, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                width: `50vh`,
                height: "65vh",
                backgroundPosition: "center",
                padding: "5vh",
                backgroundRepeat: "no-repeat",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="aspect-video w-screen shrink-0 rounded-[5vh] bg-black object-cover flex flex-col items-center justify-center "
            >
              <img
                src={service.img}
                alt="image"
                className="w-[45vh] h-[30vh] rounded-3xl"
              />
              <h1 className="text-2xl mt-5 text-white text-center">
                {service.title}
              </h1>
              <p className="p-5 text-center text-white text-sm">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-4 flex w-full justify-center gap-2">
        {allServices.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
