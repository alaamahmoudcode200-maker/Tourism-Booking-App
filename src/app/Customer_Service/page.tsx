import Header from "../../commponant/header";
import CustomerServicePage from "@/commponant/Customerservice";
import ApplcationDownload from "../../commponant/applcation";
import ScrollToTopButton from "@/commponant/ScrollToTopButton";
import FadeInFromRight from "../../commponant/anmtionscrol";
import Footer from "../../commponant/footr";

export default function Home() {
  return (
  <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 ">
      <Header />
        <FadeInFromRight delay={0.1}><CustomerServicePage/></FadeInFromRight>
       <FadeInFromRight delay={0.2}><ApplcationDownload /></FadeInFromRight>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}