export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-100 bg-slate-900 py-8 text-center text-sm text-slate-400">
      {data.channels && (
        <div className="mb-5 flex flex-wrap justify-center gap-2 px-4">
          {data.channels.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-4 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-white hover:text-white"
            >
              {c.label}
            </a>
          ))}
        </div>
      )}
      {data.lines?.map((line) => (
        <p key={line} className="mb-1">{line}</p>
      ))}
      <p className="mt-3">{data.text}</p>
    </footer>
  );
}
