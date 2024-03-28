import getMassageShops from "@/lib/getMassageShops";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidateTag } from "next/cache";
import dbConnect from "@/db/dbConnect";
import { redirect } from "next/navigation";
import { MassageShop } from "../../../interface";
import MassageShopSchema from "@/db/models/MassageShop";

export default async function MassageShop() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const massageShops = await getMassageShops(session.user.token);
  console.log(massageShops);

  return (
    <div className="h-[100vh] bg-white text-black items-center flex justify-center flex-col bg-gradient-to-b from-customOrangeStart to-customOrangeEnd p-10">
      <div className="text-black font-bold text-7xl text-center py-10">
        OUR MASSAGE SHOPS
      </div>
      <div className="font-bold text-center flex grid grid-cols-6 text-black w-full">
        <div className="pr-[5vw]">name</div>
        <div className="">address</div>
        <div className="">opentime</div>
        <div className="">closetime</div>
        <div className="">tel</div>
      </div>
      <div className="w-[90%] bg-black h-[0.5px] my-5 mx-20" />

      {massageShops.data.map((massageShop: MassageShop) => (
        <div className="flex grid grid-cols-6 text-black w-full">
          <div className="font-bold">{massageShop.name}</div>
          <div className="text-center">{massageShop.address}</div>
          <div className="text-center">{massageShop.opentime}</div>
          <div className="text-center">{massageShop.closetime}</div>
          <div className="text-center">{massageShop.tel}</div>
          <button className=" items-center bg-red-500 py-2 px-5 rounded-full w-fit">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
