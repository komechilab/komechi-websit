// 각 페이지 맨 위 배너: 밝은 바탕에 빛이 떠다니고, 제목이 한 줄씩 떠오른다 (홈 배너의 밝은 버전)
export default function PageHero({ data }) {
  const lines = data.title.split("\n");
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 sm:py-24">
      <div aria-hidden="true" className="hero-orb page-orb-1" />
      <div aria-hidden="true" className="hero-orb page-orb-2" />
      <div aria-hidden="true" className="page-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <span
          style={{ animationDelay: "0.05s" }}
          className="hero-in inline-block rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-blue-700 backdrop-blur sm:text-xs sm:tracking-[0.2em]"
        >
          {data.eyebrow}
        </span>
        <h1 className="mt-6 text-[1.6rem] font-extrabold leading-snug text-slate-900 sm:text-5xl sm:leading-tight">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <span
                style={{ animationDelay: `${0.25 + i * 0.2}s` }}
                className={`hero-line block ${i === lines.length - 1 ? "page-shine" : ""}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        {data.description && (
          <p
            style={{ animationDelay: "0.8s" }}
            className="hero-in mx-auto mt-5 max-w-2xl text-balance text-[0.9rem] leading-relaxed text-slate-600 sm:text-lg"
          >
            {data.description}
          </p>
        )}
        {data.cta && (
          <a
            href={data.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: "1.0s" }}
            className="hero-in group mx-auto mt-7 flex w-full max-w-md items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-left shadow-md ring-1 ring-emerald-100 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-emerald-300"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#03C75A] text-lg font-extrabold text-white" aria-hidden="true">N</span>
            <span className="flex-1">
              <span className="block text-sm font-extrabold text-slate-900 sm:text-base">{data.cta.text}</span>
              {data.cta.sub && <span className="mt-0.5 block text-xs text-slate-500">{data.cta.sub}</span>}
            </span>
            <span className="text-xl text-emerald-600 transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </section>
  );
}
