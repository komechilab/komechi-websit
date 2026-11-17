export default function QuickLinks({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-extrabold text-slate-900">
        {data.title}
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {data.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-xl bg-white p-7 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-blue-300"
          >
            <p className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700">
              {item.label} →
            </p>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
