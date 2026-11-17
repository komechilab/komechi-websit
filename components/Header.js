import NavLinks from "@/components/NavLinks";
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
    <>
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-6 sm:py-5">
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

          <a href="/" aria-label="홈으로" className="flex flex-col items-center gap-2 transition hover:opacity-80">
            <img
              src={header.logoImage}
              alt={header.logoTitle}
              className="h-24 w-auto object-contain"
            />
          </a>

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
            <a
              href={header.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-green-600"
            >
              <span className="flex h-4 w-5 items-center justify-center rounded-sm bg-[#03C75A] text-[0.6rem] font-extrabold text-white" aria-hidden="true">N</span>
              {header.blogLabel} 바로가기
            </a>
          </div>
        </div>

        {/* Mobile layout: 한 줄짜리 간결한 헤더 */}
        <div className="flex items-center justify-between gap-3 sm:hidden">
          <a href="/" aria-label="홈으로">
            <img
              src={header.logoImage}
              alt={header.logoTitle}
              className="h-10 w-auto max-w-[11.5rem] object-contain"
            />
          </a>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${header.phone}`}
              aria-label={`${header.phoneLabel} ${header.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
            </a>
            <a
              href={`mailto:${header.email}`}
              aria-label={`${header.emailLabel} ${header.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
            </a>
            <LanguageSwitcher languages={header.languages} />
          </div>
        </div>
      </div>
    </header>

      <nav className="sticky top-0 z-50 border-b border-t border-gray-100 bg-white/95 backdrop-blur">
        {/* 모바일: 오른쪽에 메뉴가 더 있다는 표시(흐려지는 가장자리) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
        <div className="no-scrollbar mx-auto flex max-w-6xl gap-x-6 overflow-x-auto whitespace-nowrap px-5 py-3 sm:flex-wrap sm:justify-center sm:gap-x-10 sm:overflow-visible sm:px-6 sm:py-4">
          <NavLinks nav={nav} />
        </div>
      </nav>
    </>
  );
}
