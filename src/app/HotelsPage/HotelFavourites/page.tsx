import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import SearchResultCards from '@/commponant/cardsearch';
import ApplcationDownload from '@/commponant/applcation';
import Footer from '@/commponant/footr';
export default function HotelFavourites() {
  return (
      <main className="font-sans bg-white grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  gap-16 ">

        <Header />
        <Hero />
        <NavTabs />
        <HotelSearch />
        <SearchResultCards />
        <ApplcationDownload />
        <Footer />
    </main>
  );
}