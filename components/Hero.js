import HeroRotator from "@/components/HeroRotator";

// 메인 첫 화면: 빛나는 배경 위로 비전 문구가 한 줄씩 떠오르고, 지키는 대상이 바뀌어 나타난다
export default function Hero({ data }) {
  const lines = data.title.split("\n");
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-slate-950 py-20 text-white sm:min-h-[92vh]">
      {/* 배경 사진: 천천히 당겨짐 */}
      <div
        aria-hidden="true"
        className="hero-zoom absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      />
      {/* 어둡게 덮는 그라데이션 */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950" />
      {/* 떠다니는 빛 */}
      <div aria-hidden="true" className="hero-orb hero-orb-1" />
      <div aria-hidden="true" className="hero-orb hero-orb-2" />
      <div aria-hidden="true" className="hero-orb hero-orb-3" />

      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <span
          style={{ animationDelay: "0.1s" }}
          className="hero-in inline-block rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-sky-200 sm:tracking-[0.2em] backdrop-blur sm:text-xs"
        >
          {data.badge}
        </span>

        <h1 className="mt-7 text-[1.5rem] font-extrabold leading-snug sm:text-6xl sm:leading-tight">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <span
                style={{ animationDelay: `${0.35 + i * 0.22}s` }}
                className={`hero-line block ${i === lines.length - 1 ? "hero-shine" : ""}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          style={{ animationDelay: "1.0s" }}
          className="hero-in mt-6 text-base font-semibold text-slate-200 sm:text-2xl"
        >
          <HeroRotator words={data.rotatingWords} />
          <span className="sm:ml-2">{data.rotatingSuffix}</span>
        </p>

        <p
          style={{ animationDelay: "1.25s" }}
          className="hero-in mx-auto mt-6 max-w-2xl text-balance text-[0.85rem] leading-relaxed text-slate-300 sm:text-base"
        >
          {data.subtitle}
        </p>

        <div
          style={{ animationDelay: "1.5s" }}
          className="hero-in mt-9 grid grid-cols-2 justify-center gap-2.5 sm:flex sm:flex-row sm:gap-3"
        >
          <a
            href={data.primaryCta.href}
            className="col-span-2 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 sm:px-7"
          >
            {data.primaryCta.text}
          </a>
          <a
            href={data.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white/10 px-3 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 sm:px-7"
          >
            {data.secondaryCta.text}
          </a>
          {data.tertiaryCta && (
            <a
              href={data.tertiaryCta.href}
              className="rounded-lg bg-white/10 px-3 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 sm:px-7"
            >
              {data.tertiaryCta.text}
            </a>
          )}
        </div>
      </div>

      {/* 아래로 내려 보라는 표시 */}
      <div
        aria-hidden="true"
        style={{ animationDelay: "2s" }}
        className="hero-in absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="hero-scroll flex h-9 w-5 justify-center rounded-full border-2 border-white/40 pt-1.5">
          <span className="h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
