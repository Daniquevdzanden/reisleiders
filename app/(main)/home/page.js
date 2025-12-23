import Tijdlijn from "@/components/Tijdlijn";
import Goedemorgen from "@/components/Goedemorgen";
import MijnFavorieten from "@/components/MijnFavorieten";
import Nieuws from "@/components/Nieuws";

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 min-h-0">
      <div className="grid grid-rows-5">
        <div className="row-span-1 px-4 py-2 min-w-0 ">
          <Goedemorgen name="Danique" />
        </div>

        <div className="row-span-4 px-4 py-2">
          <Tijdlijn />
        </div>
      </div>

      <div className="grid grid-rows-5">
        <div className="row-span-2 px-4 py-2">
          <MijnFavorieten />
        </div>

        <div className="row-span-3 px-4 py-2">
          <Nieuws />
        </div>
      </div>
    </div>
  );
}
