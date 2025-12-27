"use client";

import { useState } from "react";

export default function Ontdekken() {
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
      if (current.includes(option)) {
        return { ...prev, [filterId]: current.filter((o) => o !== option) };
      } else {
        return { ...prev, [filterId]: [...current, option] };
      }
    });
  };

  const clearFilter = (filterId) =>
    setSelected((prev) => ({ ...prev, [filterId]: [] }));
  const saveFilter = (filterId) =>
    alert(
      `Geselecteerde opties voor ${filterId}: ${selected[filterId].join(", ")}`
    );

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-paytone text-atalenta-paars mb-4">
        Materialen
      </h1>

      <div className="flex gap-4 flex-wrap">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            {/* Filter knop */}
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === filter.id ? null : filter.id)
              }
              className="flex items-center px-4 py-2 rounded-xl bg-atalenta-paars/25 text-black font-semibold hover:bg-atalenta-paars/50 transition-colors"
            >
              {filter.label}
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:rotate-180">
                &#9662;
              </span>
            </button>

            {/* Dropdown content */}
            {openDropdown === filter.id && (
              <div className="absolute left-0 mt-1 w-40 bg-white rounded-xl shadow-lg z-10 flex flex-col">
                {filter.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg"
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

                <div className="flex justify-between px-4 py-2 mt-2 border-t border-gray-200">
                  <button
                    onClick={() => clearFilter(filter.id)}
                    className="text-sm text-gray-700 hover:underline"
                  >
                    Wissen
                  </button>
                  <button
                    onClick={() => saveFilter(filter.id)}
                    className="text-sm text-atalenta-paars font-semibold hover:underline"
                  >
                    Opslaan
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
