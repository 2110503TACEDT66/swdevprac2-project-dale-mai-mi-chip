"use client";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";

import DateReserve from "./DateReserve";
import LocationReserve from "./LocationReservation";

import { useSearchParams } from "next/navigation";
import { addReservation } from "@/redux/feature/bookSlice";
import { useState } from "react";
import { ReservationItems } from "../../interface";

export default function AddNewReservations() {
  const urlParams = useSearchParams();
  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const { data: session } = useSession();
  const role = session?.user.role;
  const name = session?.user.name;

  if (!name) return null;

  const dispatch = useDispatch<AppDispatch>();
  const createBooking = () => {
    if (bookingDate && bookingLocation) {
      alert("Reserve!");
      const item: ReservationItems = {
        name: name,
        bookingDate: dayjs(bookingDate).format("YYYY/MM/DD"), // Convert dayjs object to string
        bookingLocation: bookingLocation,
      };
      dispatch(addReservation(item));
    }
  };

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState("");

  return (
    <main className="p-10 w-3/5 h-[30%] flex flex-col items-left space-y-10 px-20 bg-black text-white rounded-3xl">
      <div className="">
        <div className="w-fit  flex flex-row gap-20">
          <div>
            <div className="text-md text-left ">date :</div>
            <DateReserve
              onDateChange={(value: Dayjs) => {
                setBookingDate(value);
              }}
            />
          </div>
          <div>
            <div className="text-md text-left  ">massage shop :</div>
            <LocationReserve
              onLocationChange={(value: string) => {
                setBookingLocation(value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex  w-[100%] grid grid-cols-2 ">
        <div className="pt-5 justify-center items-start flex flex-col w-[90%]">
          massage shop information :
          <div className="bg-white text-black rounded-3xl pl-10 py-10 w-[100%] mt-2">
            <div>name : {name}</div>
            <div>address : 101 Pine Avenue</div>
            <div>tel : 555-4321</div>
            <div>opentime : 11:15 AM</div>
            <div>closetime : 08:45 PM</div>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          {(hospitalItems.length <= 3 && role === "user") ||
          role === "admin" ? (
            <div className=" text-center pb-3 ">
              <button
                className=" px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-orange-500 
         shadow-sm text-black"
                type="submit"
                onClick={createBooking}
              >
                Book NOW
              </button>
            </div>
          ) : (
            <div>
              <button
                className="mr-5 px-4 py-2 rounded-3xl bg-gray-700 hover:bg-gray-900
     shadow-sm text-gray-500"
                type="submit"
              >
                Book NOW
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-center font-sm text-lg pb-3">
        ** user can book up to 3 massage shops only **
      </div>
    </main>
  );
}
