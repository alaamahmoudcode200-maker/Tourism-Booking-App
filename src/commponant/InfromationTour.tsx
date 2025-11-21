
import TourCard from "@/commponant/perperson";
import BookingForm from "@/commponant/bookingexcurasion";
import HotelImageGallery from "@/commponant/boohingimage";
import AccountCard from "@/commponant/commeint";
export default function InfromationTour(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 px-8">
            <HotelImageGallery/>
            <AccountCard/>
            <BookingForm/>
            </div>
            <div className="px-8 py-3">
            <TourCard/>
            </div>
        </div>
    )
}