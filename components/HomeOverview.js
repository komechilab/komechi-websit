// 메인 화면: 어떤 회사인지 한눈에 (정체성 한 문장 → 하는 일 3가지 → 핵심 숫자)
export default function HomeOverview({ data }) {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-bold tracking-wide text-blue-600">
          {data.eyebrow}
        </p>
        <h2 className="mt-3 whitespace-pre-line text-center text-2xl font-extrabold leading-snug text-slate-900 sm:text-4xl">
          {data.headline}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {data.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl bg-slate-900 px-4 py-5 text-center text-white"
            >
              <p className="text-xl font-extrabold sm:text-2xl">{fact.value}</p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
