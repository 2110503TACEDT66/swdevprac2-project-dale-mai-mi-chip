"use client";
import { allFeedBacks } from "@/constant/feedbacks.constant";
import Link from "next/link";
import { Card, CardTitle } from "./ui/Card";
import { motion } from "framer-motion";

export default function FeedBacks() {
  return (
    <div
      className="mt-[30vh] mx-[5vw] 5xl bg-black flex text-white h-[200vh] justify-center items-center rounded-[5vh]"
      id="feedbacks"
    >
      <div className="bg-black w-[55%] h-[25vh] absolute rounded-[5vh] top-[420vh] left-[5vw] text-center text-white flex flex-col pt-10">
        <div className="text-6xl font-extrabold">CUSTOMER FEEDBACKS</div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-20 p-10 ">
        {allFeedBacks.map((feedback, index) => (
          <Card
            key={index}
            className="flex items-center gap-[10px] border-none w-[25vw] h-[70vh] "
          >
            <Link href={feedback.path}>
              <motion.div whileHover={{ y: -10 }}>
                <CardTitle>{feedback.name}</CardTitle>
              </motion.div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
