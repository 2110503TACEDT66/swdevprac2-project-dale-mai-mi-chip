"use client";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function LocationReserve() {
  const [reserveDate, setReserveDate] = useState(null);
  const [location, setLocation] = useState("BKK");

  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center"
    >
      <Select
        variant="standard"
        name="location"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="h-[2em] w-[200px]"
      >
        <MenuItem value="KristenHarley">Kristen Harley</MenuItem>
        <MenuItem value="GarryHahn">Garry Hahn</MenuItem>
        <MenuItem value="SalvadorDickinson">Salvador Dickinson</MenuItem>
        <MenuItem value="MayHilpertJr.shop">May Hilpert Jr.</MenuItem>
        <MenuItem value="FredrickKonopelski">Fredrick Konopelski</MenuItem>
      </Select>
    </div>
  );
}
