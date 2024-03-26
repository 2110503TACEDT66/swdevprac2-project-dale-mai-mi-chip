"use client";

import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";
import { ReservationItems } from "../../interface";
import Link from "next/link";

export default function BookingList() {
  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const { data: session } = useSession();
  const name = session?.user.name;
  const role = session?.user.role;
  return (
    <div className="text-black">
      {hospitalItems.map((bookingItem: ReservationItems) => (
        <div
          className="bg-slate-200 rounded px-5 py-5 my-2 mx-5 flex flex-row gap-[50vw]"
          key={bookingItem.name}
        >
          <div className="mt-10">
            <div className="text-xl text-black">{name}</div>
            <div className="text-xl text-black">{bookingItem.bookingDate}</div>
            <div className="text-sm text-black">
              {bookingItem.bookingLocation}
            </div>
          </div>

          <div className="flex items-center ">
            {(hospitalItems.length <= 3 && role === "user") ||
            role === "admin" ? (
              <Link href={"/reservation"}>
                <button className="p-5 bg-green-700  rounded-3xl text-black">
                  Add more Reservation
                </button>
              </Link>
            ) : (
              <button
                className="p-5 bg-grey-700 rounded-3xl text-black"
                onClick={() => {
                  alert("Too many Reservation");
                }}
              >
                Add more Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
