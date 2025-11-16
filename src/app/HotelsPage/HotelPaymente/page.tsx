import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import PassengerForm from '@/commponant/addPassengers';
import HotelInfoCard from '@/commponant/infocard';
import ApplcationDownload from '@/commponant/applcation';
import Footer from '@/commponant/footr';
export default function SearchHotelsPage() {
  return (
     <main className="font-sans bg-white  items-center justify-items-center min-h-screen  "> 

        <Header />
        <Hero />
        <NavTabs />
        <HotelSearch />
        <PassengerForm />
        <HotelInfoCard/>
        <ApplcationDownload />
        <Footer />
    </main>
  );
}