"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({
  onDateChange,
}: {
  onDateChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  return (
    <form>
      <div
        className="bg-slate-100 rounded-lg space-x-5 
        w-fit px-10 py-5 flex flex-row justify-center mt-2"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={reserveDate}
            className="bg-white w-[100%] flex justify-center items-center h-[5vh] "
            onChange={(value) => {
              setReserveDate(value);
              onDateChange(value);
            }}
          />
        </LocalizationProvider>
      </div>
    </form>
  );
}
