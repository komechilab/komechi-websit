"use client";

import { useMemo, useState } from "react";

const PAGE_SIZE = 6;

export default function Partnership({ data }) {
  const [industry, setIndustry] = useState(data.industries[0]);
  const [region, setRegion] = useState(data.regions[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return data.items.filter((item) => {
      const industryMatch =
        industry === data.industries[0] || item.industryTag === industry;
      const regionMatch = region === data.regions[0] || item.regionTag === region;
      return industryMatch && regionMatch;
    });
  }, [data, industry, region]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function updateFilter(setter, value) {
    setter(value);
    setPage(1);
  }

  return (
    <section
      className="relative bg-slate-900 bg-cover bg-center py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(8,13,28,0.85), rgba(8,13,28,0.9)), url(${data.backgroundImage})`,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide text-blue-400">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-4xl font-extrabold">{data.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <select
            value={industry}
            onChange={(e) => updateFilter(setIndustry, e.target.value)}
            className="rounded-lg border border-white/20 bg-slate-800 px-4 py-2 text-sm"
          >
            {data.industries.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <select
            value={region}
            onChange={(e) => updateFilter(setRegion, e.target.value)}
            className="rounded-lg border border-white/20 bg-slate-800 px-4 py-2 text-sm"
          >
            {data.regions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <button
            onClick={() => {
              setIndustry(data.industries[0]);
              setRegion(data.regions[0]);
              setPage(1);
            }}
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            전체 보기
          </button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white/95 p-6 text-slate-900 shadow-sm"
            >
              <div className="flex gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {item.industryTag}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {item.regionTag}
                </span>
              </div>
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
          {pageItems.length === 0 && (
            <p className="col-span-full text-center text-slate-300">
              조건에 맞는 협업 분야가 없습니다.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-9 w-9 rounded-full text-sm font-semibold transition ${
                  n === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
