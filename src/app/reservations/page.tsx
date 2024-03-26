import AddNewReservations from "@/components/AddNewReservation"
import UserReservation from "@/components/UserReservation"

export default function Reservations() {
  return(
    <main className="min-h-screen bg-gradient-to-br from-subPageStart to-subPageEnd ">
      <div>
        <div className="text-6xl font-bold ml-20 pt-20">MY RESERVATIONS</div>
          <div className="text-xl flex flex-row space-x-52 mt-10">
            <div className="pl-20 pb-3">User's Reservation</div>
            <div className="pl-20">Add new Reservation</div>
          </div>
        <div className="flex flex-row">
          <UserReservation/>
          <AddNewReservations/>
      </div>
      </div>
    </main>
)
}
