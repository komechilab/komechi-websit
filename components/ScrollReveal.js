"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 화면에 들어오는 영역(section)을 아래에서 떠오르게 한다. 자바스크립트가 꺼져 있으면 아무 효과 없이 그대로 보인다.
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll("main section:not(:first-child)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
