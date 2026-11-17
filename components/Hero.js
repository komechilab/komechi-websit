export default function Hero({ data }) {
  return (
    <section
      className="hero-zoom relative bg-slate-900 bg-cover bg-center py-14 sm:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(10,16,32,0.75), rgba(10,16,32,0.85)), url(${data.backgroundImage})`,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <span style={{ animationDelay: "0.1s" }} className="hero-in inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-wide">
          {data.badge}
        </span>
        <h1 style={{ animationDelay: "0.25s" }} className="hero-in mt-5 text-[1.6rem] font-extrabold leading-snug sm:mt-6 sm:whitespace-pre-line sm:text-4xl">
          {data.title}
        </h1>
        <p style={{ animationDelay: "0.45s" }} className="hero-in mx-auto mt-5 max-w-2xl whitespace-pre-line text-[0.82rem] leading-relaxed sm:mt-6 text-slate-200 sm:text-base">
          {data.subtitle}
        </p>
        <div style={{ animationDelay: "0.65s" }} className="hero-in mt-7 grid grid-cols-2 justify-center gap-2.5 sm:mt-9 sm:flex sm:flex-row sm:gap-3">
          <a
            href={data.primaryCta.href}
            className="col-span-2 rounded-lg bg-blue-600 px-3 py-3 text-sm sm:px-7 font-semibold text-white transition hover:bg-blue-700"
          >
            {data.primaryCta.text}
          </a>
          <a
            href={data.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white/10 px-3 py-3 text-sm sm:px-7 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/20"
          >
            {data.secondaryCta.text}
          </a>
          {data.tertiaryCta && (
            <a
              href={data.tertiaryCta.href}
              className="rounded-lg bg-white/10 px-3 py-3 text-sm sm:px-7 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/20"
            >
              {data.tertiaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
