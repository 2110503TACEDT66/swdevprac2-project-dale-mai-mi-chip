import DateReserve from "./DateReserve"
import LocationReserve from "./LocationReserve"

export default function AddNewReservations() {
  return(
    <main className="w-3/5 h-[30%] flex flex-col items-left space-y-10 px-20 bg-black text-white rounded-3xl">
        <div>
        <div className="w-fit space-y-2 flex flex-row gap-20">
            <div>
                <div className="text-md text-left pt-10">
                    date :
                </div>
                <DateReserve/>
            </div>
            <div>
                <div className="text-md text-left pt-10 ">
                    massage shop :
                </div>
                <LocationReserve/>
            </div>
        </div>
        </div>

        <div className="pt-5">
            massage shop information : 
        
        <div className="bg-white text-black rounded-3xl pl-10 py-10 w-[40%]">
              <div>name : Kristine Haley</div>  
              <div>address : 101 Pine Avenue</div> 
              <div>tel : 555-4321</div>  
              <div>opentime : 11:15 AM</div>  
              <div>closetime : 08:45 PM</div>  
        </div>
        </div>

        <div className=" text-center pb-3">
         <button className="mr-5 px-4 py-2 rounded-3xl bg-yellow-400 hover:bg-orange-500 
         shadow-sm text-black">Book NOW</button>
         </div>

         <div className="text-center font-semibold text-xl pb-3">
         ** user can book up to 3 massage shops only ** 
         </div>
    </main>
)
}
