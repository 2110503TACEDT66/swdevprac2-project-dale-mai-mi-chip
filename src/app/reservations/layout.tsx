import UserReservation from "@/components/UserReservation"
import AddNewReservations from "@/components/AddNewReservation"

export default function ReservationLayout ({children}:{children:React.ReactNode}){
    return(
        <div className="">
            {children}
        </div>
    )
}