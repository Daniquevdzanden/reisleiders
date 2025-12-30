import Link from "next/link";

export default function DronesPage() {
  return (
    <div className="mx-4 mt-4 mb-4 h-screen flex flex-col">
      {/* Kruimelpad */}
      <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li>
            <Link href="/materialen" className="hover:underline">
              Materialen
            </Link>
          </li>
          <li>
            <span className="mx-1">→</span>
          </li>
          <li className="text-gray-900 font-semibold">Drones</li>
        </ol>
      </nav>

      {/* Pagina titel */}
      <h1 className="text-3xl font-paytone text-atalenta-paars mb-4">Drones</h1>

      {/* Inleiding */}
      <p className="text-black text-base leading-relaxed mb-6">
        Hier gaat een korte introductie komen over wat de drones inhouden
        waardoor je weet waar het over gaat. In deze introductie kun je kort
        lezen wat het inhoudt en waarom de drones een vet materiaal is om te
        gebruiken in jouw klas.
      </p>

      {/* Grid voor twee kolommen */}
      <div className="grid grid-cols-2 gap-6">
        {/* Linkerkolom: contentblok */}
        <div className="flex flex-col rounded-2xl overflow-auto h-full">
          <h2 className="font-bold text-xl mb-2">Inleiding</h2>
          <p>
            Hier gaat een korte introductie komen over wat de drones inhouden
            waardoor je weet waar het over gaat. In deze introductie kun je kort
            lezen wat het inhoudt en waarom de drones een vet materiaal is om te
            gebruiken in jouw klas.
          </p>{" "}
          <br />
          <h2 className="font-bold text-xl mb-2">
            Hoe combineer ik dit tijdens de les?
          </h2>
          <p>
            Hier gaat een korte introductie komen over wat de drones inhouden
            waardoor je weet waar het over gaat. In deze introductie kun je kort
            lezen wat het inhoudt en waarom de drones een vet materiaal is om te
            gebruiken in jouw klas.
          </p>
          <br />
          <h2 className="font-bold text-xl mb-2">
            Hoe oud moeten de kinderen zijn?
          </h2>
          <p>
            Hier gaat een korte introductie komen over wat de drones inhouden
            waardoor je weet waar het over gaat. In deze introductie kun je kort
            lezen wat het inhoudt en waarom de drones een vet materiaal is om te
            gebruiken in jouw klas.
          </p>
        </div>

        {/* Rechterkolom: afbeelding + documenten */}
        <div className="flex flex-col gap-4">
          {/* Afbeelding met dunne paarse border vóór de afbeelding */}
          <div className="relative h-48">
            {/* Border vóór de afbeelding */}
            <div className="absolute inset-0 border-2 border-atalenta-paars rounded-3xl rotate-1 z-20 pointer-events-none"></div>

            {/* Afbeelding zelf */}
            <img
              src="/drones.jpg"
              alt="Drones"
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />
          </div>

          {/* Contentblok documenten */}
          <div className="rounded-2xl p-4 shadow-md bg-white">
            <h2 className="font-bold text-xl mb-2">Documenten</h2>
            <p>Hier komen de handleidingen, links of extra documenten.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
