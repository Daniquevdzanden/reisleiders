export default function Nieuws() {
  return (
    <div className="h-full flex flex-col">
      {/* Titel bovenaan */}
      <h1 className="text-1xl md:text-2xl font-baloo text-atalenta-paars mb-3 font-bold">
        Wat is er nieuw?
      </h1>

      {/* Witte container die de resterende hoogte vult */}
      <div className="overflow-hidden rounded-3xl bg-white text-black w-full p-8 md:p-10 lg:p-12 flex-1">
        {/* Flex container voor twee blokken naast elkaar */}
        <div className="flex gap-6 h-full">
          {/* Blok 1: placeholder voor content */}
          <div className="flex-1 bg-gray-200 rounded-2xl h-full"></div>

          {/* Blok 2: placeholder voor content */}
          <div className="flex-1 bg-gray-200 rounded-2xl h-full"></div>
        </div>
      </div>
    </div>
  );
}
