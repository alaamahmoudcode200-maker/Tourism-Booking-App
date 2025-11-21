import Header from "@/commponant/header";
import Hero from "@/commponant/heroseaction";
import NavTabs from "@/commponant/nave";
import SearchByAir from "@/commponant/saerchByair";
import PreferredSeat from "@/commponant/setsplan"
import ApplcationDownload from "@/commponant/applcation";
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import FadeInFromRight from "@/commponant/anmtionscrol";
import Footer from "@/commponant/footr";
export default function FinlPaymnt() {
  return (
   <main className="font-sans bg-white  items-center justify-items-center min-h-screen  ">      <Header />
      <Hero />
      <NavTabs />
      <FadeInFromRight delay={0.1}><SearchByAir/></FadeInFromRight>
      <FadeInFromRight delay={0.1}><PreferredSeat/></FadeInFromRight> 
      <FadeInFromRight delay={0.1}><ApplcationDownload /></FadeInFromRight>
      <ScrollToTopButton />  
      <Footer />
    </main>
  );
}
