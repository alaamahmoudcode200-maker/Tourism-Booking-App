import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import SwipPlace from '@/commponant/swiper';
import SwipRoom from '@/commponant/swiproom';
import ModelDeitals from '@/commponant/modeldeitals';
import ApplcationDownload from '@/commponant/applcation';
import Footer from '@/commponant/footr';
export default function HotelInfromationPage() {
  return (
      <main className="font-sans bg-white  items-center justify-items-center min-h-screen  "> 
        <Header />
        <Hero />
        <NavTabs />
        <HotelSearch />
        <SwipPlace />
        <SwipRoom />
         <SwipRoom />
        <ModelDeitals />
           <ApplcationDownload />
        <Footer />
    </main>
  );
}