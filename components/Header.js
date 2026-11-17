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
            {/* 채널 바로가기: 같은 크기·모양의 버튼 3개를 한 줄로 */}
            <div className="flex items-center gap-1.5">
              {[
                {
                  href: header.youtubeUrl,
                  label: "유튜브",
                  icon: (
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#FF0000]">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  ),
                },
                {
                  href: header.blogUrl,
                  label: "블로그",
                  icon: (
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#03C75A] text-[0.65rem] font-extrabold text-white">
                      N
                    </span>
                  ),
                },
                {
                  href: header.instagramUrl,
                  label: "인스타그램",
                  icon: (
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#fff" strokeWidth="2.4">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </span>
                  ),
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`코메치 ${c.label} 바로가기`}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-3 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  {c.icon}
                  {c.label}
                </a>
              ))}
            </div>
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
