"use client";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";
import getUserProfile from "@/lib/getUserProfile";
import DateReserve from "./DateReserve";
import LocationReserve from "./LocationReservation";
import { addReservation } from "@/redux/feature/bookSlice";
import { useState, useEffect } from "react";
import { MassageShop, ReservationItems } from "../../interface";
import getMassageShops from "@/lib/getMassageShops";
import addReservationBackend from "@/lib/addReservationBackend";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function AddNewReservations() {
  const hospitalItems = useAppSelector((state) => state.bookSlice.bookItems);
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState("");
  const [address, setAddress] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [mid, setMid] = useState("");
  const [role, setRole] = useState("");
  const [tel, setTel] = useState("");
  const [time, setTime] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [massageShops, setMassageShops] = useState<any>({ data: [] });

  const session = useSession();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!bookingDate || !time) return; // Check if bookingDate and time are set

    // Format bookingDate and time
    const formattedDate = bookingDate.format("YYYY-MM-DD"); // Format date as YYYY-MM-DD
    const formattedTime = time.format("HH:mm:ss.SSS[Z]"); // Format time as HH:mm:ss.SSSZ

    // Combine formatted date and time into a single string
    const combinedDateTime = `${formattedDate}T${formattedTime}`;

    // Call your backend API with the combinedDateTime
    const user = await addReservationBackend(token, mid, id, combinedDateTime);

    if (!user) alert("Please Enter All Field");
  };

  useEffect(() => {
    if (!session || !session.data) return;
    const token = session.data.user.token;
    setToken(token);

    const fetchMassageShops = async () => {
      try {
        const profile = await getUserProfile(session.data.user.token);

        const { _id, name, tel, email, role, __v } = profile.data;

        setName(name);
        setRole(role);
        setId(_id);
        if (!name) return null;
      } catch (error) {
        console.error("Error fetching massage shops:", error);
      }
    };

    fetchMassageShops();
  }, [session]);

  const dispatch = useDispatch<AppDispatch>();
  const createBooking = () => {
    if (!bookingDate) {
    }
    if (bookingDate && bookingLocation) {
      const item: ReservationItems = {
        name: name,
        tel: tel,
        hospitalName: bookingLocation,
        time: dayjs(time).format("h:mm A"),
        address: address,
        bookingDate: dayjs(bookingDate).format("YYYY/MM/DD"), // Convert dayjs object to string
      };
      dispatch(addReservation(item));
    }
  };

  useEffect(() => {
    if (!session || !session.data) return;

    const fetchMassageShops = async () => {
      try {
        const shops = await getMassageShops(session.data.user.token);
        setMassageShops(shops);
      } catch (error) {
        console.error("Error fetching massage shops:", error);
      }
    };

    fetchMassageShops();
  }, [session, bookingLocation]);

  return (
    <main className="p-10 w-3/5 h-[30%] flex flex-col items-left space-y-10 px-20 bg-black text-white rounded-3xl">
      <form className="flex grid grid-cols-2 gap-10" onSubmit={handleSubmit}>
        {/* Col 1 */}

        <div>
          <div className="text-md text-left ">date :</div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setBookingDate(value);
            }}
          />
        </div>
        <div className="">
          <div className="text-md text-left ">massage shop :</div>
          <LocationReserve
            onLocationChange={(value: string) => {
              setBookingLocation(value);
              const selectedShop = massageShops.data.find(
                (shop: MassageShop) => shop.name === value
              );
              // Update the address state with the address of the selected shop
              if (selectedShop) {
                setAddress(selectedShop.address);
                setTel(selectedShop.tel);
                setMid(selectedShop._id);
                console.log(mid);
              } else {
                setAddress(""); // Clear address if no shop is selected
                setTel("");
              }
            }}
          />
        </div>
        {/* Cols 3 */}
        <div className="flex w-[100%]">
          {bookingLocation ? (
            massageShops.data.map((massageShop: MassageShop) =>
              massageShop.name === bookingLocation ? (
                <div
                  className="pt-5 justify-center items-start flex flex-col w-[90%]"
                  key={massageShop.name}
                >
                  massage shop information :
                  <div className="bg-white text-black rounded-3xl pl-10 py-10 w-[100%] mt-2 font-bold">
                    <div>
                      name : <span className="font-light">{name}</span>
                    </div>
                    <div>
                      massageShop :{" "}
                      <span className="font-light">{massageShop.name}</span>
                    </div>
                    <div>
                      address :{" "}
                      <span className="font-light">{massageShop.address}</span>
                    </div>
                    <div>
                      tel :{" "}
                      <span className="font-light">{massageShop.tel}</span>
                    </div>
                    <div>
                      opentime :{" "}
                      <span className="font-light">{massageShop.opentime}</span>
                    </div>
                    <div>
                      closetime :{" "}
                      <span className="font-light">
                        {massageShop.closetime}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <div className="pt-5 justify-center items-start flex flex-col w-[90%] font-bold">
              massage shop information :
              <div className="bg-white text-black rounded-3xl pl-10 py-10 w-[100%] mt-2 grid gris-cols-2 flex">
                <div>
                  name : <span className="text-black font-light">{name}</span>
                </div>
                <div>
                  massageShop :{" "}
                  <span className="text-red-500 font-bold">Pending</span>
                </div>
                <div>
                  address :{" "}
                  <span className="text-red-500 font-bold">Pending</span>{" "}
                </div>
                <div>
                  tel : <span className="text-red-500 font-bold">Pending</span>{" "}
                </div>
                <div>
                  opentime :{" "}
                  <span className="text-red-500 font-bold">Pending</span>{" "}
                </div>
                <div>
                  closetime :{" "}
                  <span className="text-red-500 font-bold">Pending</span>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Col 4 */}
        <div className="">
          <div className="pt-5 "> time reservation :</div>
          <div
            className="bg-slate-100 rounded-lg space-x-5 
      w-[100%] px-10 py-5 flex flex-row justify-center mt-2 h-[12vh] "
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Controlled picker"
                className="bg-white w-[100%] flex justify-center items-center "
                value={time}
                onChange={(newValue: Dayjs | null) => {
                  setTime(newValue);
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="w-[100%] flex items-center justify-center mt-12">
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
      </form>

      <div className="text-center font-sm text-lg pb-3">
        ** user can book up to 3 massage shops only **
      </div>
    </main>
  );
}
