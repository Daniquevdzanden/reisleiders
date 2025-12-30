export default function MijnFavorieten() {
  return (
    <div className="h-full flex flex-col">
      {/* Titel bovenaan */}
      <h1 className="text-1xl md:text-2xl font-baloo text-atalenta-paars mb-3 font-bold">
        Mijn favorieten
      </h1>

      {/* Witte container vult nu volledige resterende hoogte */}
      <div className="overflow-hidden rounded-3xl bg-white text-black w-full p-8 md:p-10 lg:p-12 flex-1">
        {/* Flex container voor de twee blokken */}
        <div className="flex gap-6 h-full">
          {/* Blok 1 */}
          <div className="flex-1 bg-gray-200 rounded-2xl h-full"></div>

          {/* Blok 2 */}
          <div className="flex-1 bg-gray-200 rounded-2xl h-full"></div>
        </div>
      </div>
    </div>
  );
}
