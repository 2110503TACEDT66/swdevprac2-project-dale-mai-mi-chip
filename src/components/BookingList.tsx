import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";
import { ReservationItems } from "../../interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeReservation } from "@/redux/feature/bookSlice";

export default function BookingList() {
  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const { data: session } = useSession();
  const name = session?.user.name;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="text-white">
      {hospitalItems.map((bookingItem: ReservationItems, index: number) => (
        <div className="flex mt-5 gap-10 mb-10" key={index}>
          <div className="text-lg">{index + 1}.</div>
          <div className="flex flex-col items-start">
            <div className="rounded text-start" key={bookingItem.name}>
              <div className="text-sm">
                {" "}
                name : <span className="text-sm text-grey-700">{name}</span>
              </div>
              <div className="text-sm">
                hospital :{" "}
                <span className="text-gray-400">
                  {bookingItem.hospitalName}
                </span>
              </div>
              <div className="text-sm">
                address :{" "}
                <span className="text-gray-400">{bookingItem.address}</span>
              </div>
              <div className="text-sm">
                {" "}
                date :
                <span className="text-gray-400">{bookingItem.bookingDate}</span>
              </div>
              <div className="text-sm">
                time : <span className="text-gray-400">{bookingItem.time}</span>
              </div>
              <div className="text-sm">
                tel : <span className="text-gray-400">{bookingItem.tel}</span>
              </div>
            </div>
          </div>
          <div className="ml-auto items-center flex">
            <button
              className="px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-orange-500 shadow-sm text-black"
              type="submit"
              onClick={() => {
                dispatch(removeReservation(bookingItem));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
