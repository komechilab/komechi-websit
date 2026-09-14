"use client";

import { useState } from "react";

export default function Business({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = data.tabs[activeIndex];

  return (
    <section id={data.id} className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-blue-600">
          {data.eyebrow}
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
          {data.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">{data.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {data.tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${
              index === activeIndex
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-gray-300 text-slate-700 hover:border-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-gray-600">{activeTab.intro}</p>

      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {activeTab.items.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
