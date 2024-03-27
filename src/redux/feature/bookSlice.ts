import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MassageShop, ReservationItems } from "../../../interface";

type BookState = {
    bookItems : ReservationItems[]
}

const initialState: BookState = { bookItems : [] }

export const bookSlice = createSlice({
    name : "book",
    initialState,
    reducers : {
        addReservation: (state, action: PayloadAction<ReservationItems>) => {
            const newItem = action.payload;
            // Check if the new item already exists in the state
            const isDuplicate = state.bookItems.some(item =>
                item.name === newItem.name && item.bookingDate === newItem.bookingDate
            );
            if (!isDuplicate) {
                // Add the new item only if it's not a duplicate
                state.bookItems.push(newItem);
            }
        },
        removeReservation : (state, action:PayloadAction<ReservationItems>) => {
            const remainItem = state.bookItems.filter(obj => {
                return ( (obj.name !== action.payload.name || obj.bookingDate !== action.payload.bookingDate || obj.bookingLocation !== action.payload.bookingLocation) )
            })
            state.bookItems = remainItem
        },
    }
})

export const {addReservation, removeReservation} = bookSlice.actions

export default bookSlice.reducer