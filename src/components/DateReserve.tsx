"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function DateReserve({
  onDateChange,
  onLocationChange,
}: {
  onDateChange: Function;
  onLocationChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string>("");

  return (
    <form className="rounded-lg space-x-10 space-y-2 w-fit px-10 py-5 flex flex-row  justify-between">
      <div className="">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={reserveDate}
            className="bg-white"
            onChange={(value) => {
              setReserveDate(value);
              onDateChange(value);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className=" w-full">
        <Select
          variant="standard"
          name="location"
          id="location"
          className="h-[2em] w-[200px] "
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            onLocationChange(e.target.value);
          }}
        >
          <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
      </div>
    </form>
  );
}
