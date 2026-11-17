export default function Advisor({ data }) {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
      <p className="text-sm font-bold tracking-wide text-blue-600">
        {data.eyebrow}
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
        {data.title}
      </h2>
      <p className="mt-4 max-w-3xl text-gray-600">{data.subtitle}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.people.map((person) => (
          <div
            key={person.name}
            className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-2xl font-extrabold text-slate-900">
              {person.name}
              <span className="ml-2 text-base font-semibold text-blue-600">
                {person.role}
              </span>
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
              {person.bio.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-blue-600">■</span>
                  {line}
                </li>
              ))}
            </ul>
            {person.cardUrl && (
              <a
                href={person.cardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {data.cardLabel} →
              </a>
            )}
          </div>
        ))}
        {data.download && (
          <a
            href={data.download.href}
            download={data.download.fileName}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 p-7 text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
            <p className="text-xs font-bold tracking-[0.2em] text-sky-100">{data.download.eyebrow}</p>
            <p className="mt-2 flex items-center gap-2 text-2xl font-extrabold">
              <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M12 12v6m-3-3 3 3 3-3" />
              </svg>
              {data.download.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-blue-50">{data.download.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-bold text-blue-700 transition group-hover:bg-blue-50">
                {data.download.button} ↓
              </span>
              <span className="text-xs text-blue-100">{data.download.meta}</span>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
