import Header from "../../commponant/header";
import Hero from "../../commponant/heroseaction";
import NavTabs from "../../commponant/nave";
import SearchByAir from "@/commponant/saerchByair";
import ApplcationDownload from "../../commponant/applcation";
import SearchFielterTekt from "@/commponant/searchteakt";
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import Footer from "../../commponant/footr";
import FadeInFromRight from "@/commponant/anmtionscrol";

export default function Home() {
  return (
  <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 ">
      <Header />
      <Hero />
      <NavTabs />
      <FadeInFromRight delay={0.1}><SearchByAir /></FadeInFromRight>
         <FadeInFromRight delay={0.2}><SearchFielterTekt/></FadeInFromRight>
      <FadeInFromRight delay={0.2}><ApplcationDownload /></FadeInFromRight>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}