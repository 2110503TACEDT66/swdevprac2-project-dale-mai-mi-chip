"use client";
import getMassageShops from "@/lib/getMassageShops";
import { MassageShop } from "../../../interface";
import deleteMassageShop from "@/lib/deleteMassageShop";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import getUserProfile from "@/lib/getUserProfile";
import updateMassageShop from "@/lib/updateReservation";
import Link from "next/link";

export default function MassageShop() {
  const [massageShops, setMassageShops] = useState<MassageShop[]>();
  const [newName, setNewName] = useState<string>("");
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [role, setRole] = useState("");
  const session = useSession();

  const token = session.data?.user.token;

  if (!session || !token) return null;

  const fetchData = async () => {
    // setIsDelete(!isDelete);

    const shop = await getMassageShops(token);
    const role = await getUserProfile(token);
    setMassageShops(shop.data);
    setRole(role.data.role);

    // setIsDelete(!isDelete);
  };

  useEffect(() => {
    fetchData();
    console.log("Mass : ", massageShops);
  }, []);

  // if (!massageShops) return null;

  const handleClick = async (id: string) => {
    setIsDelete(!isDelete);

    try {
      await deleteMassageShop(id, token);
    } catch (error) {
      console.log(error);
    } finally {
      // console.log(" Now Delete ");
      // setIsDelete(!isDelete);
      window.location.reload();
    }
  };
  const handleUpdate = async (id: string, name: string) => {
    setIsDelete(!isDelete);

    try {
      // await updateMassageShop(id, name, token);
    } catch (error) {
      console.log(error);
    } finally {
      // console.log(" Now Delete ");
      // setIsDelete(!isDelete);
      window.location.reload();
    }
  };

  return (
    <div className="pl-20 h-[100vh] bg-white text-black items-center flex justify-center flex-col bg-gradient-to-b from-subPageStart to-subPageEnd p-10">
      <div className="text-black font-bold text-7xl text-center pb-10 mt-2 ">
        OUR MASSAGE SHOPS
      </div>
      <div className="font-bold text-center flex grid grid-cols-7 text-black w-full">
        <div className="pr-[5vw]">name</div>
        <div className="">address</div>
        <div className="">opentime</div>
        <div className="">closetime</div>
        <div className="">tel</div>
      </div>
      <div className="w-[90%] bg-black h-[2px] my-5 mr-20 text-black " />
      {massageShops?.map((massageShop: MassageShop) => (
        <div
          className="flex grid grid-cols-7 text-black w-full mt-1"
          key={massageShop._id}
        >
          <div className="font-bold">{massageShop.name}</div>
          <div className="text-center">{massageShop.address}</div>
          <div className="text-center">{massageShop.opentime}</div>
          <div className="text-center">{massageShop.closetime}</div>
          <div className="text-center">{massageShop.tel}</div>
          {role === "admin" ? (
            <div className="flex gap-2">
              <button
                className="bg-white p-1 rounded-full w-[30%] text-sm hover:bg-yellow-300 ml-20"
                onClick={() => handleClick(massageShop._id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <input type="text" className="" />
              <button className="bg-gray-500 p-1 rounded-full  text-sm w-[30%]">
                Update
              </button>
              <button className="bg-gray-500 p-2 rounded-full  text-sm w-[30%]">
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center mr-[10vw] pt-10">
        {session ? (
          <Link href={"/massageshops/manage"}>
            <button className="mr-5 bg-black text-white px-5 py-2 rounded-3xl">
              ADD Massageshop
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
