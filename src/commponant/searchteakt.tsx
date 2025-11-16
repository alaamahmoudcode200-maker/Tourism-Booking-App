import FlightFilters from "./fieltr";
import FlightDetailCard from "./cardairtekt";
export default function SearchFielterTekt(){
    return(
        <div className="grid grid-cols-1 md:flex gap-8">
         <FlightFilters />
         <FlightDetailCard />
        </div>
    );
}