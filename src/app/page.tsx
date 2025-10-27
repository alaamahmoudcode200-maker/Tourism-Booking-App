
import Header from "./commponant/header";
import Hero from "./commponant/heroseaction";
import NavTabs from "./commponant/nave"
import HotelSearch from "./commponant/search"
import Stories from "./commponant/Stories"
import FeaturedTours from "./commponant/FeaturedTours"
import FeaturedHotels from "./commponant/FeaturedHotels";
import OffersSection from "./commponant/offers-section";
import StepsWorke from "./commponant/stapsworke"
import Testimonials from "./commponant/clintcomint"
import PaymentCommponant from "./commponant/pyment"
import ApplcationDownload from "./commponant/applcation"
import Footer from "./commponant/footr"
import "./globals.css";
export default function Home() {
  return (
    <main className="font-sans bg-white grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen  gap-16 ">

      <Header />
      <Hero />
      <NavTabs />
      <HotelSearch />
      <Stories />
      <FeaturedTours />
      <FeaturedHotels />
      <OffersSection />
      <StepsWorke />
      <Testimonials />
      <PaymentCommponant />
      <ApplcationDownload />
      <Footer />
    </main>
  );
}