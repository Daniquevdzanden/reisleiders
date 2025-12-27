import Tijdlijn from "@/components/Tijdlijn";

export default function Ontdekken() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pagina titel */}
      <div className="mx-4 mt-4 mb-4">
        <h1 className="text-3xl font-paytone text-atalenta-paars">Ontdek…</h1>
      </div>

      {/* Paarse mini header-balk met zwarte tekst */}
      <div className="bg-atalenta-paars/25 rounded-xl mx-4 mt-2 p-2 flex justify-start gap-4">
        <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
          Tijdlijn
        </button>
        <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
          Wat is er nieuw?
        </button>
      </div>

      {/* Hoofdcontent met flex voor links/rechts */}
      <div className="flex flex-1 flex-col lg:flex-row mt-4">
        {/* Linkerkant: inhoud */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p></p>
        </div>

        {/* Rechterkant: Tijdlijn */}
        <div className="w-full lg:w-1/2 p-4">
          <Tijdlijn />
        </div>
      </div>
    </div>
  );
}
