export default function SpecRequest({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <a
        href={data.backHref}
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        {data.backText}
      </a>

      <p className="mt-6 text-sm font-bold tracking-wide text-blue-600">
        {data.eyebrow}
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
        {data.title}
      </h1>
      <p className="mt-4 max-w-3xl text-gray-600">{data.subtitle}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {data.sets.map((set) => (
          <div
            key={set.title}
            className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-100"
          >
            <h2 className="text-lg font-bold text-slate-900">{set.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{set.description}</p>

            <div className="mt-5 flex flex-col gap-3">
              {set.files.map((file) => (
                <a
                  key={file.href}
                  href={file.href}
                  download={file.download}
                  className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-gray-200 transition hover:border-blue-600 hover:text-blue-700 hover:ring-blue-600"
                >
                  <span>{file.label}</span>
                  <span aria-hidden="true">⬇</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-slate-900 p-6 text-white">
        <p className="font-bold">{data.noteTitle}</p>
        <p className="mt-2 text-sm text-slate-300">{data.noteText}</p>
      </div>
    </section>
  );
}
