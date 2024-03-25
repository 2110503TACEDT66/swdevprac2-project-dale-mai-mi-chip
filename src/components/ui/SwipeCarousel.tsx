import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "./images.jpg",
  "./images.jpg",
  "./images.jpg",
  "./images.jpg",
  "./images.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 100;

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
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && imgIndex > 0) {
        setImgIndex((pv) => pv - 1);
      } else if (event.key === "ArrowRight" && imgIndex < imgs.length - 1) {
        setImgIndex((pv) => pv + 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalRef);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [imgIndex, dragX, imgs.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8 bg-white px-2">
      <motion.div
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `${
            imgIndex === imgs.length - 1
              ? `calc(-${imgIndex * 10}vh - 10%)` // Adding extra translation for the last image
              : `-${imgIndex * 10}vh`
          }`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center hover:cursor-pointer"
      >
        {imgs.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                width: `${imgs.length * 10}vh`,
                height: "65vh",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover h-20"
            />
          );
        })}
      </motion.div>

      <div className="mt-4 flex w-full justify-center gap-2">
        {imgs.map((_, idx) => {
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
      <div className=""></div>
    </div>
  );
};
