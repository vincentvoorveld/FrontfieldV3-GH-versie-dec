// Gebruik echte portfolio-projecten in plaats van de oude voorbeeldlogo's.
const projects = [
  { initials: "BN", name: "Barbershop Nieuwland", category: "Barbershop", color: "#d7a76e" },
  { initials: "AD", name: "Anne's Dieren Tekeningen", category: "Kunst & illustratie", color: "#8ebbb2" },
  { initials: "SC", name: "Silverwood Coloring", category: "Kleurboeken", color: "#bc9bdb" },
  { initials: "SK", name: "Sinterklaas Kleurboek", category: "Kleurboeken", color: "#e9b879" }
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-primary border-y border-border" aria-label="Voorbeelden van websites">
      <div className="overflow-hidden">
        <div className="flex animate-scroll" style={{ width: "max-content", animationDuration: "32s" }}>
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex items-center mx-4" style={{ width: 320, flexShrink: 0 }}>
              <div className="flex items-center w-full rounded-lg p-4" style={{ background: "#fff", gap: 16, minHeight: 100, boxShadow: "0 5px 20px rgba(0,0,0,.12)" }}>
                <div className="flex items-center justify-center rounded-lg font-bold" style={{ width: 60, height: 60, flexShrink: 0, color: "#162840", background: project.color, fontSize: 21 }}>
                  {project.initials}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="font-semibold" style={{ color: "#162840", fontSize: 16, lineHeight: 1.35 }}>{project.name}</div>
                  <div style={{ color: "#607083", fontSize: 13, marginTop: 5 }}>{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
