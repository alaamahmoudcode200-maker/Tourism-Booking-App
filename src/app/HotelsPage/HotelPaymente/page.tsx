import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import PassengerForm from '@/commponant/addPassengers';
import HotelInfoCard from '@/commponant/infocard';
import ApplcationDownload from '@/commponant/applcation';
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import FadeInFromRight from "@/commponant/anmtionscrol";
import Footer from '@/commponant/footr';
export default function SearchHotelsPage() {
  return (
     <main className="font-sans bg-white  items-center justify-items-center min-h-screen  "> 

        <Header />
        <Hero />
        <NavTabs />
          <FadeInFromRight delay={0.1}><HotelSearch /></FadeInFromRight>
          <FadeInFromRight delay={0.2}><PassengerForm /></FadeInFromRight>
         <FadeInFromRight delay={0.3}><HotelInfoCard/></FadeInFromRight> 
          <FadeInFromRight delay={0.4}><ApplcationDownload /></FadeInFromRight>
        <ScrollToTopButton />
        <Footer />
    </main>
  );
}