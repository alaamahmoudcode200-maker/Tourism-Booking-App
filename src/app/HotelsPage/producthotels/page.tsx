import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import CardHotels from "@/commponant/card"
import ApplcationDownload from '@/commponant/applcation';
import Footer from '@/commponant/footr';
export default function HotelsPage() {
  return (
      <main className="font-sans bg-white grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  gap-16 ">

        <Header />
        <Hero />
        <NavTabs />
        <HotelSearch />
        <CardHotels />
        <ApplcationDownload />
        <Footer />
    </main>
  );
}