import Header from "../../../commponant/header";
import Hero from "../../../commponant/heroseaction";
import NavTabs from "../../../commponant/nave";
import SearchByAir from "@/commponant/saerchByair";
import PassengerForm from "@/commponant/addPassengers";
import ApplcationDownload from "../../../commponant/applcation";
import Footer from "../../../commponant/footr";
export default function FinlPaymnt() {
  return (
     <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 "> 
        <Header />
      <Hero />
      <NavTabs />
      <SearchByAir/>
      <PassengerForm/>


      <ApplcationDownload />
      <Footer />
    </main>
  );
}