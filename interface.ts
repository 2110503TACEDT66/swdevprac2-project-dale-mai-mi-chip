import { Dayjs } from "dayjs"

export interface MassageShop {
  name : string,
  address : string,
  tel: string,
  opentime : string,
  closetime : string,
  data : string
  reservations : Array<string>
}

export interface HospitalJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: MassageShop[]
}

export interface ReservationItems {
  name : string,
  bookingDate : string,
  bookingLocation : string
  
}