export default function Goedemorgen({ name }) {
  return (
    /* Container met paarse achtergrond en afgeronde hoeken */
    <div className="overflow-hidden rounded-3xl bg-atalenta-paars text-white w-full p-8 md:p-10 lg:p-12">
      {/* Titel: "Goedemorgen [Naam]" */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-paytone">
        <span className="text-white">Goedemorgen </span>
        {/* Naam wordt in geel weergegeven */}
        <span className="block sm:inline-block mt-1 sm:mt-0 text-[#FDC422]">
          {name}
        </span>
      </h1>

      {/* Ondertitel / begeleidende tekst */}
      <p className="mt-3 text-xl sm:text-2xl 2xl:text-3xl font-normal font-caveat">
        Klaar om alles over de reisleiders te weten te komen?
      </p>
    </div>
  );
}
