export default function Hero({ data }) {
  return (
    <section
      className="relative bg-slate-900 bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(10,16,32,0.75), rgba(10,16,32,0.85)), url(${data.backgroundImage})`,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-wide">
          {data.badge}
        </span>
        <h1 className="mt-6 whitespace-pre-line text-3xl font-extrabold leading-snug sm:text-4xl">
          {data.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-200 sm:text-base">
          {data.subtitle}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={data.primaryCta.href}
            className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {data.primaryCta.text}
          </a>
          <a
            href={data.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/20"
          >
            {data.secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
