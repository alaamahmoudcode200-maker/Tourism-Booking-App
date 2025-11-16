import Header from "../../commponant/header";
import Hero from "../../commponant/heroseaction";
import NavTabs from "../../commponant/nave";
import ApplcationDownload from "../../commponant/applcation";
import ToursRsult from "@/commponant/toursersult";
import SearchByAir from "@/commponant/saerchByair";
import Footer from "../../commponant/footr";

export default function Home() {
  return (
    <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 ">      <Header />
      <Hero />
      <NavTabs />
      <SearchByAir/>
      <ToursRsult/>
      <ApplcationDownload />
      <Footer />
    </main>
  );
}