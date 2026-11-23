type LogoKey = 'va' | 'fit' | 'barber' | 'silverwood';

const logos: { key: LogoKey; label: string }[] = [
  { key: 'va', label: 'Virtual Assistant' },
  { key: 'fit', label: 'Fitness Center' },
  { key: 'barber', label: 'Barbershop Nieuwland' },
  { key: 'silverwood', label: 'Aria Silverwood' },
];

function LogoArtwork({ type }: { type: LogoKey }) {
  switch (type) {
    case 'va':
      return (
        <svg viewBox="0 0 320 120" className="w-full h-auto text-white" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="52" cy="38" r="12" />
            <path d="M34 82c4-18 15-27 30-27s26 9 30 27" />
            <path d="M106 24h54v34h-54z" />
            <path d="M121 60h24" />
            <path d="M134 58v12" />
          </g>
          <text x="178" y="54" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" letterSpacing="2">VIRTUAL</text>
          <text x="178" y="82" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" letterSpacing="2">ASSISTANT</text>
        </svg>
      );

    case 'fit':
      return (
        <svg viewBox="0 0 320 120" className="w-full h-auto text-white" aria-hidden="true">
          <text x="160" y="24" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" letterSpacing="3">FITNESS CENTER</text>
          <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M98 60h124" />
            <path d="M118 42v36" />
            <path d="M130 36v48" />
            <path d="M190 42v36" />
            <path d="M202 36v48" />
          </g>
          <text x="160" y="103" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" letterSpacing="4">ESTD 2002</text>
        </svg>
      );

    case 'barber':
      return (
        <svg viewBox="0 0 320 120" className="w-full h-auto text-white" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="62" cy="42" r="10" />
            <circle cx="86" cy="42" r="10" />
            <path d="M69 50 48 76" />
            <path d="M79 50 100 76" />
            <path d="M48 76l18-6" />
            <path d="M100 76l-18-6" />
          </g>
          <text x="176" y="50" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="2">BARBERSHOP</text>
          <text x="176" y="78" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" letterSpacing="3">NIEUWLAND</text>
        </svg>
      );

    case 'silverwood':
      return (
        <svg viewBox="0 0 320 120" className="w-full h-auto text-white" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M54 82V56" />
            <path d="M54 30 38 54h32z" />
            <path d="M54 18 42 38h24z" />
            <path d="M34 86h40" />
          </g>
          <text x="92" y="50" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" letterSpacing="4">ARIA</text>
          <text x="92" y="80" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" letterSpacing="4">SILVERWOOD</text>
        </svg>
      );
  }
}

export default function ClientLogos() {
  return (
    <section className="py-14 bg-primary border-y border-border" aria-label="Logo's van voorbeeldwebsites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex animate-scroll items-center" style={{ width: 'max-content', animationDuration: '34s' }}>
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-36 mx-8 sm:mx-10"
              style={{ width: 280, flexShrink: 0 }}
              aria-label={logo.label}
            >
              <LogoArtwork type={logo.key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}