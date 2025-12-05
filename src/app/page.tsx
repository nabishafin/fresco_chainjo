import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import WorkStep from "@/components/WorkStep";


export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>

      <Hero />



      <div id="works">
        <WorkStep></WorkStep>
      </div>

      <div id="pricing">
        <Pricing></Pricing>
      </div>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
