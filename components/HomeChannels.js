// 홈: 유튜브·블로그·인스타로 유도하는 채널 소개 카드
const STYLE = {
  유튜브: "from-red-500 to-rose-600",
  블로그: "from-emerald-500 to-green-600",
  인스타그램: "from-amber-400 via-pink-500 to-indigo-500",
};

export default function HomeChannels({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <p className="text-center text-sm font-bold tracking-wide text-blue-600">{data.eyebrow}</p>
      <h2 className="mt-2 text-center text-[1.4rem] font-extrabold text-slate-900 sm:text-3xl">{data.title}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {data.items.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between rounded-2xl bg-gradient-to-br ${STYLE[c.label]} p-6 text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div>
              <p className="text-lg font-extrabold">{c.label}</p>
              <p className="mt-1 text-sm text-white/85">{c.description}</p>
              <p className="mt-2 text-xs font-semibold text-white/80">{c.handle}</p>
            </div>
            <span className="text-2xl transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
