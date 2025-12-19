import Tijdlijn from "@/components/Tijdlijn";
import Goedemorgen from "@/components/Goedemorgen";
import MijnFavorieten from "@/components/MijnFavorieten";
import Nieuws from "@/components/Nieuws";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:h-full lg:min-h-0">
      <div className="grid grid-rows-5">
        <div className="row-span-1 p-4 min-w-0">
          <Goedemorgen name="Danique" />
        </div>

        <div className="row-span-4 bg-blue-500 p-4">
          <Tijdlijn />
        </div>
      </div>

      <div className="grid grid-rows-5">
        <div className="row-span-2 bg-green-300 p-4">
          <MijnFavorieten />
        </div>

        <div className="row-span-3 bg-green-500 p-4">
          <Nieuws />
        </div>
      </div>
    </div>
  );
}
