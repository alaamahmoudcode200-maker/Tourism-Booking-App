import Header from "../../commponant/header";
import Hero from "../../commponant/heroseaction";
import NavTabs from "../../commponant/nave";
import SearchByAir from "../commponant/saerchByair";
import ApplcationDownload from "../../commponant/applcation";
import DigitalTicket from "./components/DigitalTicket"
import Footer from "../../commponant/footr";
export default function FinlPaymnt() {
  return (
    <main className="font-sans bg-white grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16">
      <Header />
      <Hero />
      <NavTabs />
      <SearchByAir/>
      <DigitalTicket/>
      <ApplcationDownload />
      <Footer />
    </main>
  );
}