import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ header, nav }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm">
              ☎
            </span>
            <div className="text-sm">
              <p className="text-gray-500">{header.phoneLabel}</p>
              <p className="font-bold text-slate-900">{header.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm">
              📠
            </span>
            <div className="text-sm">
              <p className="text-gray-500">{header.faxLabel}</p>
              <p className="font-bold text-slate-900">{header.fax}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={header.logoImage}
            alt={header.logoTitle}
            className="h-16 w-auto object-contain sm:h-24"
          />
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">언어</span>
            <LanguageSwitcher languages={header.languages} />
          </div>
          <p className="text-xs text-blue-600">{header.translateNote}</p>
        </div>
      </div>

      <nav className="border-t border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-4 sm:gap-x-10">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-700 sm:text-base"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
