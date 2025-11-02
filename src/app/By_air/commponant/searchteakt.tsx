import FlightFilters from "./fieltr";
import FlightDetailCard from "./cardairtekt";
export default function SearchFielterTekt(){
    return(
        <div className="flex">
         <FlightFilters />
         <FlightDetailCard />
        </div>
    );
}