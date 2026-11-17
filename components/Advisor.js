export default function Advisor({ data }) {
  return (
    <section id={data.id} className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-bold tracking-wide text-blue-600">
        {data.eyebrow}
      </p>
      <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
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
      </div>
    </section>
  );
}
