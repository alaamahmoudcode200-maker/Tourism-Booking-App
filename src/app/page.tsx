
import Header from "@/commponant/header";
import Hero from "@/commponant/heroseaction";
import NavTabs from "@/commponant/nave"
import HotelSearch from "@/commponant/search"
import Stories from "@/commponant/Stories"
import FeaturedTours from "@/commponant/FeaturedTours"
import FeaturedHotels from "@/commponant/FeaturedHotels";
import OffersSection from "@/commponant/offers-section";
import StepsWorke from "@/commponant/stapsworke"
import Testimonials from "@/commponant/clintcomint"
import PaymentCommponant from "@/commponant/pyment"
import ApplcationDownload from "@/commponant/applcation"
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import FadeInFromRight from "@/commponant/anmtionscrol";

import Footer from "@/commponant/footr"

export default function Home() {
  return (
    <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 ">

      <Header />
      <Hero />
      <FadeInFromRight delay={0.1}> <NavTabs /></FadeInFromRight>
      <FadeInFromRight delay={0.3}><HotelSearch /></FadeInFromRight>
      <FadeInFromRight delay={0.4}><Stories /></FadeInFromRight>
      <FadeInFromRight delay={0.5}><FeaturedTours /></FadeInFromRight>
      <FadeInFromRight delay={0.6}><FeaturedHotels /></FadeInFromRight>
      <FadeInFromRight delay={0.7}><OffersSection /></FadeInFromRight>
      <FadeInFromRight delay={0.8}><StepsWorke /></FadeInFromRight>
      <FadeInFromRight delay={0.9}><Testimonials /></FadeInFromRight>
      <FadeInFromRight delay={1}><PaymentCommponant /></FadeInFromRight>
      <FadeInFromRight delay={1.1}><ApplcationDownload /></FadeInFromRight>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
