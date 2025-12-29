"use client";

import { useState } from "react";

/* =========================
   1. DATA VOOR DE BLOKKEN
   ========================= */
const materials = [
  {
    id: 1,
    title: "Drones",
    text: "Wil jij echt iets nieuws op jouw locatie? Probeer dan een van onze drones.",
    image: "/drones.jpg",
  },
  {
    id: 2,
    title: "Robotica",
    text: "Ontdek alle robots die we hebben en wat ze allemaal kunnen.",
    image: "/robotica.jpg",
  },
  {
    id: 3,
    title: "3D-printer",
    text: "Maak met de 3D printer en laat je fantasie de vrije loop.",
    image: "/3d-printer.jpg",
  },
  {
    id: 4,
    title: "Podcast",
    text: "Werk met podcasts en praat over verschillende leuke onderwerpen.",
    image: "/podcast.jpg",
  },
  {
    id: 5,
    title: "Makey Makey",
    text: "Laat kinderen verrassen met wat er allemaal mogelijk is.",
    image: "/makey.jpg",
  },
  {
    id: 6,
    title: "Greenscreenbox",
    text: "Maak je eigen video met een greenscreen en laat je verassen.",
    image: "/greenscreen.jpg",
  },
];

export default function Materialen() {
  const filters = [
    { id: "thema", label: "Thema", options: ["Optie 1", "Optie 2", "Optie 3"] },
    { id: "doelen", label: "Doelen", options: ["Nieuw 1", "Nieuw 2"] },
    {
      id: "leerjaar",
      label: "Leerjaar",
      options: ["Optie 1", "Optie 2", "Optie 3"],
    },
    {
      id: "moeilijkheid",
      label: "Moeilijkheid",
      options: ["Optie 1", "Optie 2", "Optie 3"],
    },
  ];

  const [selected, setSelected] = useState(
    filters.reduce((acc, f) => ({ ...acc, [f.id]: [] }), {})
  );
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleOption = (filterId, option) => {
    setSelected((prev) => {
      const current = prev[filterId];
      if (current.includes(option))
        return { ...prev, [filterId]: current.filter((o) => o !== option) };
      return { ...prev, [filterId]: [...current, option] };
    });
  };

  const clearFilter = (filterId) =>
    setSelected((prev) => ({ ...prev, [filterId]: [] }));
  const saveFilter = (filterId) =>
    alert(
      `Geselecteerde opties voor ${filterId}: ${selected[filterId].join(", ")}`
    );

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(materials.length / itemsPerPage);
  const paginatedMaterials = materials.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-paytone text-atalenta-paars mb-4">
        Materialen
      </h1>

      {/* FILTER KNOPPEN */}
      <div className="flex gap-4 flex-wrap">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === filter.id ? null : filter.id)
              }
              className="flex items-center px-4 py-2 rounded-xl bg-atalenta-paars/25 text-black font-semibold"
            >
              {filter.label}
              <span className="ml-2">&#9662;</span>
            </button>

            {openDropdown === filter.id && (
              <div className="absolute left-0 mt-1 w-40 bg-white rounded-xl shadow-lg z-10">
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
                <div className="flex justify-between px-4 py-2 border-t">
                  <button onClick={() => clearFilter(filter.id)}>Wissen</button>
                  <button onClick={() => saveFilter(filter.id)}>Opslaan</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BLOKKEN */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {paginatedMaterials.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl overflow-visible shadow-md"
          >
            {/* Afbeelding bovenaan */}
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-2xl"
            />

            {/* Witte tekstblok voor de afbeelding */}
            <div className="-mt-12 bg-white rounded-2xl p-4 shadow-md relative z-10">
              <h3 className="font-bold text-atalenta-paars mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>

            {/* Pijltjesknop */}
            <button className="absolute z-20 bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-10 h-10 bg-[#61B55B] text-white rounded-full flex items-center justify-center shadow-md font-baloo">
              →
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATIE */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="text-xl disabled:opacity-30"
        >
          ‹
        </button>

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
