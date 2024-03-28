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
  _id: string,
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
  _id : string,
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

export interface AddReservationResponseOne {
  "success": boolean,
  "count": number,
  "data": AddReservation
}
export interface AddReservation {
  "resDate": string,
        "user": string,
        "massageShop": string,
        "_id": string,
        "__v": number
}

export interface AllReservation {
  "success": boolean,
  "count": number,
  "data": OneReservation[]
}

export interface OneReservation {
  "_id": string,
  "resDate": string,
  "user": string,
  "massageShop": {
      "_id": string,
      "name": string,
      "address": string,
      "tel": string,
      "opentime": string,
      "closetime": string,
      "id": string,
  },
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

export interface JWT {
  "id": string,
  "iat": string,
  "exp": string,
}