import virtualAssistantLogo from "@assets/Virtual Assistent_1752928699316.png";
import fitnessLogo from "@assets/Fitness Center_1752928699317.png";
import barbershopLogo from "@assets/Barbershop_1752928699318.png";
import ariaLogo from "@assets/Aria Silverwood_1752928699319.png";

// Bewaar de bestaande logo-bestanden. Ster van het Verhaal is niet zichtbaar.
const logos = [
  { src: virtualAssistantLogo, alt: "Virtual Assistant" },
  { src: fitnessLogo, alt: "Fitness Center" },
  { src: barbershopLogo, alt: "Barbershop Nieuwland" },
  { src: ariaLogo, alt: "Aria Silverwood" }
];

export default function ClientLogos() {
  return (
    <section className="py-14 bg-primary border-y border-border" aria-label="Logo's van voorbeeldwebsites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex animate-scroll items-center" style={{ width: "max-content", animationDuration: "32s" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-36 mx-8 sm:mx-10" style={{ width: 240, flexShrink: 0 }}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-28 max-w-full object-contain grayscale brightness-0 invert opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
