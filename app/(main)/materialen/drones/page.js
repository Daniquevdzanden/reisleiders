import Link from "next/link"; // Import van de Next.js Link component voor interne navigatie

export default function DronesPage() {
  return (
    <div className="mx-4 mt-4 mb-4 h-screen flex flex-col">
      {/* Kruimelpad bovenaan de pagina */}
      <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li>
            <Link href="/materialen" className="hover:underline">
              Materialen {/* Link terug naar materialen overzicht */}
            </Link>
          </li>
          <li>
            <span className="mx-1">→</span> {/* Pijl tussen links */}
          </li>
          <li className="text-gray-900 font-semibold">Drones</li>{" "}
          {/* Huidige pagina */}
        </ol>
      </nav>

      {/* Pagina titel */}
      <h1 className="text-3xl font-paytone text-atalenta-paars mb-4">Drones</h1>

      {/* Inleidende tekst */}
      <p className="text-black text-base leading-relaxed mb-6">
        Hier gaat een korte introductie komen over wat de drones inhouden
        waardoor je weet waar het over gaat. In deze introductie kun je kort
        lezen wat het inhoudt en waarom de drones een vet materiaal is om te
        gebruiken in jouw klas.
      </p>

      {/* Grid container voor twee kolommen */}
      <div className="grid grid-cols-2 gap-6">
        {/* Linkerkolom: tekstuele content */}
        <div className="flex flex-col rounded-2xl overflow-auto h-full">
          {/* Verschillende secties */}
          <h2 className="font-bold text-xl mb-2">Inleiding</h2>
          <p>
            Korte uitleg over wat drones zijn en hoe ze gebruikt kunnen worden.
          </p>
          <br />

          <h2 className="font-bold text-xl mb-2">
            Hoe combineer ik dit tijdens de les?
          </h2>
          <p>
            Uitleg over hoe de drones gebruikt kunnen worden tijdens lessen.
          </p>
          <br />

          <h2 className="font-bold text-xl mb-2">
            Hoe oud moeten de kinderen zijn?
          </h2>
          <p>
            Uitleg over de aanbevolen leeftijd van de kinderen voor dit
            materiaal.
          </p>
        </div>

        {/* Rechterkolom: afbeelding en documenten */}
        <div className="flex flex-col gap-4">
          {/* Afbeelding van drones met decoratieve border */}
          <div className="relative h-48">
            {/* Paarse border vóór de afbeelding */}
            <div className="absolute inset-0 border-2 border-atalenta-paars rounded-3xl rotate-1 z-20 pointer-events-none"></div>

            {/* De afbeelding zelf */}
            <img
              src="/drones.jpg"
              alt="Drones"
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />
          </div>

          {/* Contentblok voor documenten */}
          <div className="rounded-2xl p-4 shadow-md bg-white">
            <h2 className="font-bold text-xl mb-2">Documenten</h2>
            <p className="mb-3">
              Hier komen handleidingen, links of extra documenten.
            </p>

            {/* Lijst van documenten */}
            <ul className="space-y-2">
              <li className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                {/* Link en informatie over het document */}
                <div className="flex items-center gap-3">
                  {/* Icon voor document */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-atalenta-paars"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7zM4 6h.01M4 10h.01M4 14h.01M4 18h.01"
                    />
                  </svg>

                  {/* Titel en info van document */}
                  <div>
                    <p className="font-semibold">Drones handleiding</p>
                    <p className="text-xs text-gray-500">
                      HTML placeholder • vervang door PDF in /public indien
                      gewenst
                    </p>
                  </div>
                </div>

                {/* Knop om document te openen */}
                <div>
                  <a
                    href="/drones-handleiding.pdf"
                    className="text-sm text-white bg-atalenta-paars px-3 py-1.5 rounded-lg hover:opacity-90"
                  >
                    Open
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
