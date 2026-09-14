export default function Location({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-blue-600">
          {data.eyebrow}
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
          {data.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-gray-600">{data.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <iframe
          title="office-map"
          src={data.mapEmbedSrc}
          className="h-80 w-full rounded-xl border-0 lg:h-full"
          loading="lazy"
        />
        <div className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-100">
          <h3 className="text-xl font-bold text-slate-900">
            {data.companyName}
          </h3>

          <dl className="mt-6 divide-y divide-gray-200 text-sm">
            <div className="py-3">
              <dt className="font-semibold text-gray-500">
                {data.addressLabel}
              </dt>
              <dd className="mt-1 text-slate-800">
                {data.address}
                <br />
                {data.addressExtra}
              </dd>
            </div>
            <div className="py-3">
              <dt className="font-semibold text-gray-500">
                {data.phoneLabel}
              </dt>
              <dd className="mt-1 text-slate-800">{data.phone}</dd>
            </div>
            <div className="py-3">
              <dt className="font-semibold text-gray-500">{data.faxLabel}</dt>
              <dd className="mt-1 text-slate-800">{data.fax}</dd>
            </div>
            <div className="py-3">
              <dt className="font-semibold text-gray-500">
                {data.emailLabel}
              </dt>
              <dd className="mt-1 text-slate-800">{data.email}</dd>
            </div>
          </dl>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <a
              href={data.naverMapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#03C75A] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              {data.naverMapText}
            </a>
            <a
              href={data.kakaoMapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#FEE500] px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:opacity-90"
            >
              {data.kakaoMapText}
            </a>
            <a
              href={data.tmapHref}
              className="rounded-lg bg-[#1E1BEC] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              {data.tmapText}
            </a>
            <a
              href={data.mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {data.mapLinkText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
