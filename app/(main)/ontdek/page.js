import Tijdlijn from "@/components/Tijdlijn"; // Import van de Tijdlijn component
import Link from "next/link"; // Import voor interne navigatie

export default function Communicatie() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pagina titel */}
      <div className="mx-4 mt-4 mb-4">
        <h1 className="text-3xl font-paytone text-atalenta-paars">
          Communicatie
        </h1>
      </div>

      {/* Paarse mini header-balk met knoppen voor subpagina's */}
      <div className="bg-atalenta-paars/25 rounded-xl mx-4 mt-2 p-2 flex justify-start gap-4">
        {/* Knop voor Tijdlijn */}
        <Link href="/ontdek">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Tijdlijn
          </button>
        </Link>

        {/* Knop voor Wat is er nieuw? */}
        <Link href="/ontdek/nieuw">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Wat is er nieuw?
          </button>
        </Link>
      </div>

      {/* Hoofdcontent: flex container voor layout */}
      <div className="flex flex-1 flex-col lg:flex-row mt-4">
        {/* Linkerkant: inhoud van de pagina */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p></p>
        </div>

        {/* Rechterkant: Tijdlijn component */}
        <div className="w-full lg:w-1/2 p-4">
          <Tijdlijn /> {/* Toont de tijdlijn van activiteiten of updates */}
        </div>
      </div>
    </div>
  );
}
