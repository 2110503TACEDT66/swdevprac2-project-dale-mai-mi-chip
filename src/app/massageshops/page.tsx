import getMassageShops from "@/lib/getMassageShops";
import { MassageShop } from "../../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/lib/getUserProfile";
import Link from "next/link";

export default async function MassageShop() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const massageShops = await getMassageShops(session.user.token);

  return (
    <div className="h-[100vh] bg-white text-black items-center flex justify-center flex-col bg-gradient-to-b from-customOrangeStart to-customOrangeEnd p-10">
      <div className="text-black font-bold text-7xl text-center py-10">
        OUR MASSAGE SHOPS
      </div>
      <div className="font-bold text-center flex grid grid-cols-5 text-black w-full">
        <div className="">name</div>
        <div className="">address</div>
        <div className="">opentime</div>
        <div className="">closetime</div>
        <div className="">tel</div>
      </div>
      <div className="w-[90%] bg-black h-[0.5px] my-5 mx-20" />

      {massageShops.data.map((massageShop: MassageShop) => (
        <div className="text-center flex grid grid-cols-5 text-black w-full">
          <div>{massageShop.name}</div>
          <div>{massageShop.address}</div>
          <div>{massageShop.opentime}</div>
          <div>{massageShop.closetime}</div>
          <div>{massageShop.tel}</div>
        </div>
      ))}
    </div>
  );
}
