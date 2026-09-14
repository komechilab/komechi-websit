export default function Process({ data }) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide text-blue-600">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
            {data.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
