"use client";

import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";
import { ReservationItems } from "../../interface";

export default function BookingList() {
  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const { data: session } = useSession();
  const name = session?.user.name;
  return (
    <div className="text-black">
      {hospitalItems.map((bookingItem: ReservationItems) => (
        <div
          className="bg-slate-200 rounded px-5 py-5 my-2 mx-5"
          key={bookingItem.name}
        >
          <div className="text-xl text-black">{name}</div>
          <div className="text-xl text-black">{bookingItem.bookingDate}</div>
          <div className="text-sm text-black">
            {bookingItem.bookingLocation}
          </div>
        </div>
      ))}
    </div>
  );
}
