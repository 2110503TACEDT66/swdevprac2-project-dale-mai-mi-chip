import { Dayjs } from "dayjs"

export interface MassageShopResponse 
  {
    "success": boolean,
    "count": number,
    "pagination": {
        "next": {
            "page": number,
            "limit": number
        }
    },
    "data": MassageShop[]
}

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
  hospitalName : string,
  address : string,
  time : string,
  bookingDate : string,
  tel : string
}

export interface AddReservationResponse {
  "success": boolean,
  "count": number,
  "data": AddReservation[]
}
export interface AddReservation {
  "resDate": string,
        "user": string,
        "massageShop": string,
        "_id": string,
        "__v": number
}


export interface UserProfileResponse {
  "success": boolean,
  "data": UserProfile
}

export interface UserProfile {
  "_id": string,
  "name": string,
  "tel": string,
  "email": string,
  "role": string,
  "__v": number
}