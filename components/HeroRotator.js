"use client";

import { useEffect, useState } from "react";

// "건물을 / 설비를 / 내일을" 처럼 단어가 2.6초마다 아래에서 올라오며 바뀐다
export default function HeroRotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="relative inline-block min-w-[6.5em] text-right text-sky-300">
      <span key={i} className="hero-word inline-block">
        {words[i]}
      </span>
    </span>
  );
}
