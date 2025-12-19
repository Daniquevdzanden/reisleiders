export default function Goedemorgen({ name }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-atalenta-paars p-6 md:p-10 text-white w-full box-border">
      {/* subtle decorative shape (kept inside parent) */}
      <div
        className="absolute left-4 top-4 h-32 w-32 rounded-full bg-white/6 scale-100 pointer-events-none"
        aria-hidden
      />

      {/* corner strokes (inside bounds) */}
      <div className="absolute left-4 bottom-4 flex space-x-2">
        <span className="block h-1 w-6 rounded bg-white/20 rotate-12" />
        <span className="block h-1 w-6 rounded bg-white/20 -rotate-12" />
      </div>

      <div className="relative z-10">
        <h1 className="text-3 md:text-5xl lg:text-xl font-extrabold leading-tight max-w-full">
          <span>Goedemorgen</span>
          <span className="mt-1 md:mt-0 md:inline-block ml-0 md:ml-3 text-amber-400">
            {name}
          </span>
        </h1>

        <p className="mt-3 text-lg md:text-2xl italic font-light text-white/90">
          Klaar om alles over de reisleiders te weten te komen?
        </p>
      </div>
    </div>
  );
}
