"use client";

import { useState } from "react";

const ICONS = {
  유튜브: (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] shadow-lg">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
    </span>
  ),
  블로그: (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#03C75A] text-base font-extrabold text-white shadow-lg">N</span>
  ),
  인스타그램: (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] shadow-lg">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></svg>
    </span>
  ),
};

// 휴대폰 화면 오른쪽 아래에 떠 있는 버튼 — 누르면 유튜브·블로그·인스타 바로가기가 펼쳐진다
export default function ChannelFab({ channels }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-2.5 sm:hidden">
      {channels.map((c, i) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ transitionDelay: open ? `${(channels.length - 1 - i) * 50}ms` : "0ms" }}
          className={`flex items-center gap-2 transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow-md">{c.label}</span>
          {ICONS[c.label]}
        </a>
      ))}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "채널 바로가기 닫기" : "유튜브·블로그·인스타 바로가기 열기"}
        aria-expanded={open}
        className="fab-pulse flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/40"
      >
        <svg viewBox="0 0 24 24" className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          {open ? <path d="M12 5v14M5 12h14" /> : <><path d="M4 12a8 8 0 0 1 8-8" /><path d="M4 12h3l2 6 3-12 3 9 2-3h3" /></>}
        </svg>
      </button>
    </div>
  );
}
