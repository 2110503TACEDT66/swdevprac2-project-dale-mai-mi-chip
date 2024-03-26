"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { getSession } from "next-auth/react";

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
      <div
        className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center"
      >
        <Select
          variant="standard"
          name="location"
          id="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            onLocationChange(e.target.value);
          }}
          className="h-[2em] w-[200px]"
        >
          <MenuItem value="KristenHarley">Kristen Harley</MenuItem>
          <MenuItem value="GarryHahn">Garry Hahn</MenuItem>
          <MenuItem value="SalvadorDickinson">Salvador Dickinson</MenuItem>
          <MenuItem value="MayHilpertJr.shop">May Hilpert Jr.</MenuItem>
          <MenuItem value="FredrickKonopelski">Fredrick Konopelski</MenuItem>
        </Select>
      </div>
    </form>
  );
}
