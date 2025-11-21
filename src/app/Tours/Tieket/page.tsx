import Header from "@/commponant/header";
import Hero from "@/commponant/heroseaction";
import NavTabs from "@/commponant/nave";
import SearchByAir from "@/commponant/saerchByair";
import ApplcationDownload from "@/commponant/applcation";
import DigitalTicket from "@/commponant/DigitalTicket"
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import FadeInFromRight from "@/commponant/anmtionscrol";
import Footer from "@/commponant/footr";
export default function DigitalTicketPage() {
  return (
    <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 "> 
         <Header />
      <Hero />
      <NavTabs />
    <FadeInFromRight delay={0.1}><SearchByAir/></FadeInFromRight>
        <FadeInFromRight delay={0.2}>< DigitalTicket/></FadeInFromRight>
       <FadeInFromRight delay={0.2}><ApplcationDownload /></FadeInFromRight> 
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}