import Header from "../../commponant/header";
import CustomerServicePage from "@/commponant/Customerservice";
import ApplcationDownload from "../../commponant/applcation";
import Footer from "../../commponant/footr";

export default function Home() {
  return (
  <main className="font-sans bg-white  items-center justify-items-center min-h-screen  gap-16 ">
      <Header />
       <CustomerServicePage/>
      <ApplcationDownload />
      <Footer />
    </main>
  );
}