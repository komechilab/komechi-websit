import LanguageSwitcher from "@/components/LanguageSwitcher";

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm">
        {icon}
      </span>
      <div className="text-sm">
        <p className="text-gray-500">{label}</p>
        <p className="font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="transition hover:opacity-80"
    >
      {content}
    </a>
  );
}

export default function Header({ header, nav }) {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        {/* Desktop / tablet layout */}
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="flex flex-col items-start gap-1.5">
            <ContactRow
              icon="☎"
              label={header.phoneLabel}
              value={header.phone}
              href={`tel:${header.phone}`}
            />
            <ContactRow icon="📠" label={header.faxLabel} value={header.fax} />
            <ContactRow icon="✉️" label={header.emailLabel} value={header.email} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={header.logoImage}
              alt={header.logoTitle}
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Language</span>
              <LanguageSwitcher languages={header.languages} />
            </div>
            <a
              href={header.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-red-600"
            >
              <svg viewBox="0 0 28 20" className="h-4 w-5" aria-hidden="true">
                <path
                  d="M27.4 3.1a3.5 3.5 0 0 0-2.46-2.48C22.76.1 14 .1 14 .1s-8.76 0-10.94.52A3.5 3.5 0 0 0 .6 3.1 36.6 36.6 0 0 0 .08 10a36.6 36.6 0 0 0 .52 6.9 3.5 3.5 0 0 0 2.46 2.48C5.24 19.9 14 19.9 14 19.9s8.76 0 10.94-.52a3.5 3.5 0 0 0 2.46-2.48A36.6 36.6 0 0 0 27.92 10a36.6 36.6 0 0 0-.52-6.9Z"
                  fill="#FF0000"
                />
                <path d="M11.2 14.2 18.5 10l-7.3-4.2v8.4Z" fill="#fff" />
              </svg>
              {header.youtubeLabel} 바로가기
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-4 sm:hidden">
          <img
            src={header.logoImage}
            alt={header.logoTitle}
            className="h-20 w-auto object-contain"
          />

          <div className="flex w-full items-start justify-between gap-3">
            <div className="flex flex-col items-start gap-1.5">
              <ContactRow
                icon="☎"
                label={header.phoneLabel}
                value={header.phone}
                href={`tel:${header.phone}`}
              />
              <ContactRow icon="📠" label={header.faxLabel} value={header.fax} />
              <ContactRow icon="✉️" label={header.emailLabel} value={header.email} />
            </div>

            <div className="flex flex-col items-end gap-2 text-right">
              <span className="text-xs text-gray-500">Language</span>
              <LanguageSwitcher languages={header.languages} />
              <a
                href={header.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-600 underline-offset-2 hover:underline"
              >
                ▶ {header.youtubeLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-t border-gray-100 bg-white">
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
