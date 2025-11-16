import Header from '@/commponant/header';
import Hero from '@/commponant/heroseaction';
import NavTabs from '@/commponant/nave';
import HotelSearch from '@/commponant/search';
import BookingConfirmation from '@/commponant/BookingConfirmation';
import ApplcationDownload from '@/commponant/applcation';
import Footer from '@/commponant/footr';
export default function SearchHotelsPage() {
  return (
        <main className="font-sans bg-white  items-center justify-items-center min-h-screen  "> 

        <Header />
        <Hero />
        <NavTabs />
        <HotelSearch />
        <BookingConfirmation />
        <ApplcationDownload />
        <Footer />
    </main>
  );
}