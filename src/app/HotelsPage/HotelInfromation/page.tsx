import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import SwipPlace from '@/commponant/swiper';
import SwipRoom from '@/commponant/swiproom';
import ModelDeitals from '@/commponant/modeldeitals';
import ApplcationDownload from '@/commponant/applcation';
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import Footer from '@/commponant/footr';
import FadeInFromRight from "@/commponant/anmtionscrol";
export default function HotelInfromationPage() {
  return (
      <main className="font-sans bg-white min-h-screen  "> 
        <Header />
        <Hero />
        <NavTabs />
         <FadeInFromRight delay={0.1}><HotelSearch /></FadeInFromRight>
         <FadeInFromRight delay={0.2}><SwipPlace /></FadeInFromRight>
         <FadeInFromRight delay={0.3}><SwipRoom /></FadeInFromRight>
         <FadeInFromRight delay={0.4}> <SwipRoom /></FadeInFromRight>
         <FadeInFromRight delay={0.5}><ModelDeitals /></FadeInFromRight>
         <FadeInFromRight delay={0.6}><ApplcationDownload /></FadeInFromRight> 
        <ScrollToTopButton />
        <Footer />
    </main>
  );
}