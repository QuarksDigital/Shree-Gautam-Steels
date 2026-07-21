import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import CraftStory from "@/components/sections/CraftStory";
import ProductRange from "@/components/sections/ProductRange";
import WhyPartner from "@/components/sections/WhyPartner";
import Numbers from "@/components/sections/Numbers";
import Testimonials from "@/components/sections/Testimonials";
import Enquiry from "@/components/sections/Enquiry";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <CraftStory />
        <ProductRange />
        <WhyPartner />
        <Numbers />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
