import { MassageShop } from "../../interface";
import Link from "next/link";
import { Card, CardTitle } from "./ui/Card";
import { allFeedBacks } from "@/constant/feedbacks.constant";
import getMassageShops from "@/lib/getMassageShops";

export default async function FeedBacks() {
  // const massageShops = await getMassageShops();

  return (
    <div className="mt-[30vh] mx-[10vw] 5xl bg-black flex text-white h-[120vh] justify-center items-center rounded-[5vh] px-20">
      <div className="mt-[-150vh]" id="feedbacks"></div>
      <div className="bg-black w-[55%] h-[25vh] absolute rounded-[5vh] top-[420vh] left-[10vw] text-center text-white flex flex-col pt-10">
        <div className="text-6xl font-extrabold">CUSTOMER FEEDBACKS</div>
      </div>
      <div className=" grid grid-cols-3 gap-20 p-10 ">
        {allFeedBacks.map((massageShop) => (
          <Card
            key={massageShop.name}
            className="flex items-center gap-[10px] border-none w-[18vw] h-[45vh] "
          >
            <Link href={"/"}>
              <CardTitle>{massageShop.name}</CardTitle>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
