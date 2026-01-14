"use client"; // Geeft aan dat dit component in de browser draait

import { useState } from "react"; // React hook om state bij te houden
import Link from "next/link"; // Voor interne navigatie tussen pagina's

// Lijst van materialen met info, afbeelding en filters
const materials = [
  {
    id: 1,
    title: "Drones",
    text: "Wil jij echt iets nieuws op jouw locatie? Probeer dan een van onze drones.",
    image: "/drones.jpg",
    link: "/materialen/drones",
    filters: {
      thema: ["Blink/Staal", "Feestdagen"],
      doelen: ["Praktische kennis en vaardigheden"],
      leerjaar: ["Onderbouw - groep 1-3"],
      moeilijkheid: ["2 sterren"],
    },
  },
  {
    id: 2,
    title: "Robotica",
    text: "Ontdek alle robots die we hebben en wat ze allemaal kunnen.",
    image: "/robotica.jpg",
    filters: {
      thema: ["Blink/Staal", "Schoolbreed"],
      doelen: ["Praktische kennis en vaardigheden"],
      leerjaar: ["Middenbouw - groep 4-6"],
      moeilijkheid: ["1 ster"],
    },
  },
  {
    id: 3,
    title: "3D-printer",
    text: "Maak met de 3D printer en laat je fantasie de vrije loop.",
    image: "/3d-printer.jpg",
    filters: {
      thema: ["Actualiteit"],
      doelen: ["De gedigitaliseerde wereld", "Ontwerpen en maken"],
      leerjaar: ["Bovenbouw - groep 7-8"],
      moeilijkheid: ["3 sterren"],
    },
  },
  {
    id: 4,
    title: "Podcast",
    text: "Werk met podcasts en praat over verschillende leuke onderwerpen.",
    image: "/podcast.jpg",
    filters: {
      thema: ["Actualiteit", "Feestdagen"],
      doelen: ["Ontwerpen en maken"],
      leerjaar: ["onderbouw - groep 1-3"],
      moeilijkheid: ["5 sterren"],
    },
  },
  {
    id: 5,
    title: "Makey Makey",
    text: "Laat kinderen verrassen met wat er allemaal mogelijk is.",
    image: "/makey.jpg",
    filters: {
      thema: ["Blink/Staal", "Feestdagen"],
      doelen: ["Praktische kennis en vaardigheden"],
      leerjaar: ["Onderbouw - groep 1-3"],
      moeilijkheid: ["2 sterren"],
    },
  },
  {
    id: 6,
    title: "Greenscreenbox",
    text: "Maak je eigen video met een greenscreen en laat je verassen.",
    image: "/greenscreen.jpg",
    filters: {
      thema: ["Blink/Staal", "Schoolbreed"],
      doelen: ["De gedigitaliseerde wereld"],
      leerjaar: ["Middenbouw - groep 4-6"],
      moeilijkheid: ["1 ster"],
    },
  },
];

export default function Materialen() {
  // Definities van filters die de gebruiker kan kiezen
  const filters = [
    {
      id: "thema",
      label: "Thema",
      options: ["Blink/Staal", "Feestdagen", "Schoolbreed", "Actualiteit"],
    },
    {
      id: "doelen",
      label: "Doelen",
      options: [
        "Praktische kennis en vaardigheden",
        "Ontwerpen en maken",
        "De gedigitaliseerde wereld",
      ],
    },
    {
      id: "leerjaar",
      label: "Leerjaar",
      options: [
        "Onderbouw - groep 1-3",
        "Middenbouw - groep 4-6",
        "Bovenbouw - groep 7-8",
      ],
    },
    {
      id: "moeilijkheid",
      label: "Moeilijkheid",
      options: ["1 ster", "2 sterren", "3 sterren", "4 sterren", "5 sterren"],
    },
  ];

  // State voor geselecteerde opties, actieve filters, dropdowns, gefilterde materialen en paginering
  const [selected, setSelected] = useState(
    filters.reduce((acc, f) => ({ ...acc, [f.id]: [] }), {})
  );
  const [activeFilters, setActiveFilters] = useState([]); // Labels van actieve filters
  const [openDropdown, setOpenDropdown] = useState(null); // Welke dropdown open is
  const [filteredMaterials, setFilteredMaterials] = useState(materials); // Lijst materialen na filter
  const [page, setPage] = useState(1); // Huidige pagina van de lijst
  const itemsPerPage = 6; // Aantal materialen per pagina

  // Toggle een filter optie aan/uit
  const toggleOption = (filterId, option) => {
    setSelected((prev) => {
      const current = prev[filterId];
      if (current.includes(option))
        return { ...prev, [filterId]: current.filter((o) => o !== option) };
      return { ...prev, [filterId]: [...current, option] };
    });
  };

  // Wis een filter volledig
  const clearFilter = (filterId) => {
    setSelected((prev) => ({ ...prev, [filterId]: [] }));
    setFilteredMaterials(materials);
    setActiveFilters((prev) => prev.filter((f) => f.filterId !== filterId));
    setPage(1);
  };

  // Pas geselecteerde opties toe en filter materialen
  const saveFilter = (filterId) => {
    const newFiltered = materials.filter((material) => {
      return Object.keys(selected).every((key) => {
        if (!selected[key].length) return true; // Geen selectie = alles tonen
        if (!material.filters?.[key]) return false; // Materiaal heeft dit filter niet
        return selected[key].some((option) =>
          material.filters[key].includes(option)
        );
      });
    });
    setFilteredMaterials(newFiltered);
    setPage(1);
    setOpenDropdown(null); // dropdown sluiten

    // Update actieve filters
    const selectedOptions = selected[filterId];
    if (selectedOptions.length) {
      setActiveFilters((prev) => [
        ...prev.filter((f) => f.filterId !== filterId),
        {
          filterId,
          label: filters.find((f) => f.id === filterId).label,
          options: selectedOptions,
        },
      ]);
    } else {
      setActiveFilters((prev) => prev.filter((f) => f.filterId !== filterId));
    }
  };

  // Verwijder een actieve filter
  const removeActiveFilter = (filterId, option) => {
    const newSelected = { ...selected };
    newSelected[filterId] = newSelected[filterId].filter((o) => o !== option);
    setSelected(newSelected);

    // Update actieve labels
    setActiveFilters((prev) =>
      prev
        .map((f) =>
          f.filterId === filterId
            ? { ...f, options: f.options.filter((o) => o !== option) }
            : f
        )
        .filter((f) => f.options.length > 0)
    );

    // Update gefilterde materialen
    const newFiltered = materials.filter((material) => {
      return Object.keys(newSelected).every((key) => {
        if (!newSelected[key].length) return true;
        if (!material.filters?.[key]) return false;
        return newSelected[key].some((option) =>
          material.filters[key].includes(option)
        );
      });
    });
    setFilteredMaterials(newFiltered);
    setPage(1);
  };

  // Materialen die op deze pagina getoond worden
  const paginatedMaterials = filteredMaterials.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(filteredMaterials.length / itemsPerPage);

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Pagina titel */}
      <h1 className="text-3xl font-paytone text-atalenta-paars mb-4">
        Materialen
      </h1>

      {/* FILTER KNOPPEN */}
      <div className="flex gap-4 flex-wrap mb-2 relative z-50">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            {/* Dropdown button */}
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === filter.id ? null : filter.id)
              }
              className="flex items-center px-4 py-2 rounded-xl bg-atalenta-paars/25 text-black font-semibold"
            >
              {filter.label}
              <span className="ml-2">&#9662;</span>
            </button>

            {/* Dropdown opties */}
            {openDropdown === filter.id && (
              <div className="absolute left-0 mt-1 w-40 bg-white rounded-xl shadow-lg z-50">
                {filter.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selected[filter.id].includes(option)}
                      onChange={() => toggleOption(filter.id, option)}
                    />
                    {option}
                  </label>
                ))}

                {/* Knoppen wissen / opslaan */}
                <div className="flex justify-between px-4 py-2 border-t mt-2">
                  <button
                    onClick={() => clearFilter(filter.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Wissen
                  </button>
                  <button
                    onClick={() => saveFilter(filter.id)}
                    className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Opslaan
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Actieve filters tonen */}
      <div className="flex flex-wrap gap-2 mb-6">
        {activeFilters.map((f) =>
          f.options.map((option) => (
            <span
              key={f.filterId + option}
              className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
            >
              {f.label}: {option}
              <button
                onClick={() => removeActiveFilter(f.filterId, option)}
                className="ml-1 text-gray-500 hover:text-gray-900"
              >
                ×
              </button>
            </span>
          ))
        )}
      </div>

      {/* Materialen blokken */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {paginatedMaterials.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Geen resultaten gevonden.
          </p>
        )}
        {paginatedMaterials.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl overflow-visible shadow-md"
          >
            {/* Afbeelding */}
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-2xl"
            />

            {/* Informatie blok */}
            <div className="-mt-12 bg-white rounded-2xl p-4 shadow-md relative z-10">
              <h3 className="font-bold text-atalenta-paars mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>

            {/* Link knop */}
            {item.link && (
              <Link href={item.link}>
                <button className="absolute z-20 bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#61B55B] text-white rounded-full flex items-center justify-center shadow-md font-baloo">
                  →
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* PAGINATIE */}
      <div className="flex justify-center items-center gap-4 mt-10">
        {/* Vorige pagina */}
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="text-xl disabled:opacity-30"
        >
          ‹
        </button>

        {/* Paginanummers */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-8 h-8 rounded-full ${
              page === i + 1 ? "bg-atalenta-paars text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Volgende pagina */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="text-xl disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </div>
  );
}
