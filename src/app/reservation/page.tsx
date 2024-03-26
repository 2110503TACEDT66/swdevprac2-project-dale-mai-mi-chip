"use client";

import DateReserve from "@/components/DateReserve";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { addReservation } from "@/redux/feature/bookSlice";
import { useState } from "react";
import { ReservationItems } from "../../../interface";
import { getSession } from "next-auth/react";

export default function Reservations() {
  const urlParams = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();
  const createBooking = () => {
    if (bookingDate && bookingLocation) {
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
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <main className="fixed flex items-center  flex-col  bg-yellow-100 items-center space-y-10 w-full h-[150vh] ">
      <div className="mt-10 text-black text-center text-5xl font-bold">
        {}'s Reservation
      </div>

      <div className="bg-white p-8 rounded-lg">
        <div className="w-fit space-y-2">
          <form>
            <div className="mb-6 ">
              <TextField
                fullWidth
                id="Name"
                label="Name"
                variant="standard"
                name="Name"
                className=" rounded-lg"
                onChange={() => {
                  handleNameChange;
                }}
              />
            </div>
          </form>
          <div className="text-md text-left text-gray-600">
            Pick Up Date and Location
          </div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setBookingDate(value);
            }}
            onLocationChange={(value: string) => {
              setBookingLocation(value);
            }}
          />
        </div>
      </div>
      <Link href={"/myreservation"}>
        <button
          type="submit"
          className="justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-centerd "
          onClick={createBooking}
        >
          Book Vaccine
        </button>
      </Link>
    </main>
  );
}
