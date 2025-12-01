import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClientLogos from "@/components/client-logos";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Portfolio />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}
