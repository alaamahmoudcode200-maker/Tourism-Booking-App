import Header from "../../../commponant/header";
import Hero from "../../../commponant/heroseaction";
import NavTabs from "../../../commponant/nave";
import SearchByAir from "../../../commponant/saerchByair";

import PreferredSeat from "../../../commponant/setsplan"
import ApplcationDownload from "../../../commponant/applcation";
import Footer from "../../../commponant/footr";
export default function FinlPaymnt() {
  return (
   <main className="font-sans bg-white  items-center justify-items-center min-h-screen  ">      <Header />
      <Hero />
      <NavTabs />
      <SearchByAir/>
 
<PreferredSeat/> 

      <ApplcationDownload />
      <Footer />
    </main>
  );
}
