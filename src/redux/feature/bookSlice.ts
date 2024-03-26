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
        addReservation : (state, action:PayloadAction<ReservationItems>) => {
            state.bookItems.push(action.payload)
        },
        removeReservation : (state, action:PayloadAction<ReservationItems>) => {
            const remainItem = state.bookItems.filter(obj => {
                return ( (obj.name !== action.payload.name) )
            })
            state.bookItems = remainItem
        },
    }
})

export const {addReservation, removeReservation} = bookSlice.actions

export default bookSlice.reducer