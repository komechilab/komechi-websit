// 홈 첫 화면 아래: 어떤 회사인지 한눈에 보이는 소개 문구 (기업소개 페이지의 ABOUT US 문구를 그대로 사용)
export default function HomeIntro({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16">
      <p className="text-sm font-bold tracking-wide text-blue-600">
        {data.eyebrow}
      </p>
      <p className="mt-3 max-w-4xl text-lg leading-relaxed text-slate-800 sm:text-xl">
        {data.subtitle}
      </p>
      <div className="mt-8 grid gap-4 sm:max-w-xl sm:grid-cols-2">
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
    </section>
  );
}
