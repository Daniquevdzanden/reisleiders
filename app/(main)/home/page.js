// Import van herbruikbare componenten
import Tijdlijn from "@/components/Tijdlijn"; // De tijdlijn met activiteiten of updates
import Goedemorgen from "@/components/Goedemorgen"; // Welkomstbericht (bijv. "Goedemorgen Danique")
import MijnFavorieten from "@/components/MijnFavorieten"; // Component met favoriete items van de gebruiker
import Nieuws from "@/components/Nieuws"; // Component met nieuwsitems

export default function Home() {
  return (
    // Grid container: twee kolommen op XL schermen, één kolom op kleinere schermen
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-0">
      {/* Linkerkolom: goedemorgen + tijdlijn */}
      <div className="grid grid-rows-5 h-full">
        {/* Bovenste deel: Goedemorgen bericht */}
        <div className="row-span-1 px-4 py-2 h-full">
          <Goedemorgen name="Danique" />{" "}
          {/* Geeft een welkomsbericht weer met naam */}
        </div>

        {/* Onderste deel: Tijdlijn */}
        <div className="row-span-4 px-4 py-2 h-full">
          <Tijdlijn /> {/* Laat de tijdlijn van activiteiten of updates zien */}
        </div>
      </div>

      {/* Rechterkolom: favorieten + nieuws */}
      <div className="grid grid-rows-5">
        {/* Bovenste deel: MijnFavorieten */}
        <div className="row-span-2 px-4 py-2">
          <MijnFavorieten /> {/* Toont de favoriete items van de gebruiker */}
        </div>

        {/* Onderste deel: Nieuws */}
        <div className="row-span-3 px-4 py-2">
          <Nieuws /> {/* Toont nieuwsberichten of updates */}
        </div>
      </div>
    </div>
  );
}
