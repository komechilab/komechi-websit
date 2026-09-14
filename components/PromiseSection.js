export default function PromiseSection({ data }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-bold tracking-wide text-blue-600">
        {data.eyebrow}
      </p>
      <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
        {data.title}
      </h2>
      <p className="mt-4 max-w-3xl text-gray-600">{data.subtitle}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
        {data.stats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-lg bg-gray-50 p-6 ring-1 ring-gray-100"
          >
            <p className="text-2xl font-extrabold text-slate-900">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-14">
        {data.points.map((point, index) => (
          <div
            key={point.number}
            className={`flex flex-col items-center gap-8 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={point.image}
              alt={point.title}
              className="w-full flex-1 rounded-xl object-cover shadow-sm lg:h-72"
            />
            <div className="flex-1">
              <p className="text-sm font-bold text-blue-600">{point.number}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-3 text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
