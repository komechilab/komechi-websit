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
            <p className="text-xs text-blue-600">{header.translateNote}</p>
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
