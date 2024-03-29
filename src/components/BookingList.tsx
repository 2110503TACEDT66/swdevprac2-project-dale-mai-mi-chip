"use client";
import { useSession } from "next-auth/react";
import { JWT } from "../../interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState, useEffect } from "react";
import getUserProfile from "@/lib/getUserProfile";
import { removeReservation } from "@/redux/feature/bookSlice";
import deleteReservation from "@/lib/deleteReservation";
import getAllReservations from "@/lib/getAllReservations";
import { AllReservation } from "../../interface";
import { OneReservation } from "../../interface";
import { jwtDecode } from "jwt-decode";
import updateReservation from "@/lib/updateReservation";

export default function BookingList() {
  const session = useSession();

  const [reservations, setReservations] = useState<AllReservation>();
  const [role, setRole] = useState("");
  const name = session.data?.user.name;

  if (!session?.data?.user) return null;

  const token = session.data.user.token;
  const decoded: JWT = jwtDecode(token);
  const userId = decoded.id;

  const fetchData = async () => {
    // setIsDelete(!isDelete);

    const hospitalItems = await getAllReservations(session.data.user.token);
    const role = await getUserProfile(token);
    setReservations(hospitalItems);
    setRole(role.data.role);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleUpdate = async (id: string, token: string) => {
    const date = window.prompt("Please enter a date ");

    if (date) {
      if (date !== null && date !== "") {
        if (date) {
          console.log("id : ", id);
          const sucess = await updateReservation(id, date, token);

          console.log(JSON.stringify(sucess));
          fetchData();
          if (sucess) alert("update success");
        }
      } else {
        console.error("Please enter a date.");
      }
    }
  };

  return (
    <div className="text-white w-fit">
      {reservations?.data.map(
        (bookingItem: OneReservation, index: number) =>
          (role === "admin" || bookingItem.user === userId) && (
            <div className="flex mt-5 gap-10 mb-10" key={index}>
              <div className="text-lg">{index + 1}.</div>
              <div className="flex flex-col items-start">
                <div className="rounded text-start" key={bookingItem._id}>
                  <div className="text-sm">
                    {role === "admin" ? (
                      <span> UserId : </span>
                    ) : (
                      <span>Name : </span>
                    )}
                    {role === "admin" ? (
                      <span className="text-sm text-grey-700">
                        {bookingItem.user}
                      </span>
                    ) : (
                      <span> {name} </span>
                    )}
                  </div>
                  <div className="text-sm">
                    hospital :{" "}
                    <span className="text-gray-400">
                      {bookingItem.massageShop.name}
                    </span>
                  </div>
                  <div className="text-sm">
                    address :{" "}
                    <span className="text-gray-400">
                      {bookingItem.massageShop.address}
                    </span>
                  </div>
                  <div className="text-sm">
                    {" "}
                    date - time :
                    <span className="text-gray-400">{bookingItem.resDate}</span>
                  </div>
                </div>
                <div className="ml-2 items-center flex gap-5 mt-2">
                  <button
                    className="px-4 py-2 rounded-3xl w-[10vw] bg-blue-400 hover:bg-blue-500 shadow-sm text-black"
                    type="submit"
                    onClick={() => {
                      handleUpdate(bookingItem._id, session?.data.user.token);
                    }}
                  >
                    Edit Date
                  </button>
                  <button
                    className="px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-orange-500 shadow-sm text-black"
                    type="submit"
                    onClick={() => {
                      console.log(bookingItem);
                      deleteReservation(
                        bookingItem._id,
                        session?.data.user.token
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}
