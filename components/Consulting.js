export default function Consulting({ data }) {
  return (
    <section id={data.id} className="bg-slate-900 py-12 sm:py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold tracking-wide text-blue-400">
          {data.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">{data.title}</h2>
        <p className="mt-4 max-w-3xl text-slate-300">{data.subtitle}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <div
              key={service.number}
              className="rounded-xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <p className="text-sm font-bold text-blue-400">
                {service.number}
              </p>
              <h3 className="mt-1 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-bold">{data.industriesTitle}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-semibold text-slate-100"
            >
              {industry}
            </span>
          ))}
        </div>

        <h3 className="mt-14 text-lg font-bold">{data.stepsTitle}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-white p-6 text-slate-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.number}
              </span>
              <h4 className="mt-4 font-bold">{step.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <a
          href={data.cta.href}
          className="mt-10 inline-block rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {data.cta.text}
        </a>
      </div>
    </section>
  );
}
