import FlightFiltersTours from "./toursfilter"
import CardHotelsTours from "./cardtours";
import FadeInFromRight from "@/commponant/anmtionscrol";
export default function ToursRsult(){
    return(
        <div className="grid grid-cols-1  lg:grid-cols-3 lg:gap-10">
            <div>
                 <FlightFiltersTours/>
            </div>
           <div className="lg:col-span-2">
            <CardHotelsTours/>
           </div>
        </div>
    );
}