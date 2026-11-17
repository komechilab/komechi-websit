"use client";

import { usePathname } from "next/navigation";

// 상단 메뉴: 지금 보고 있는 페이지의 메뉴는 파란색·굵게·밑줄로 표시한다
export default function NavLinks({ nav }) {
  const pathname = usePathname();
  return nav.map((item) => {
    const active = !item.external && pathname === item.href;
    return (
      <a
        key={item.label}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        aria-current={active ? "page" : undefined}
        className={`border-b-2 pb-1 text-sm transition sm:text-base ${
          active
            ? "border-blue-600 font-extrabold text-blue-700 sm:text-lg"
            : "border-transparent font-semibold text-slate-700 hover:text-blue-700"
        }`}
      >
        {item.label}
      </a>
    );
  });
}
