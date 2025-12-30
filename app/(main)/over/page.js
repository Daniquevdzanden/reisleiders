import Link from "next/link";

export default function Over() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pagina titel */}
      <div className="mx-4 mt-4 mb-4">
        <h1 className="text-3xl font-paytone text-atalenta-paars">Over...</h1>
      </div>

      {/* Paarse mini header-balk met zwarte tekst */}
      <div className="bg-atalenta-paars/25 rounded-xl mx-4 mt-2 p-2 flex justify-start gap-4">
        <Link href="/over">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Achtergrond
          </button>
        </Link>

        <Link href="/over/afspraken">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Afspraken
          </button>
        </Link>

        <Link href="/over/doelen">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Doelen
          </button>
        </Link>

        <Link href="/over/contact">
          <button className="px-4 py-2 text-black font-semibold rounded-lg hover:bg-white/20">
            Contact
          </button>
        </Link>
      </div>

      {/* Hoofdcontent met flex voor links/rechts */}
      <div className="flex flex-1 flex-col lg:flex-row mt-4">
        {/* Linkerkant: inhoud */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}
