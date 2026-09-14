"use client";

import { useEffect } from "react";

// 구글 번역 위젯을 화면에는 보이지 않게 숨겨서 로드해두고,
// LanguageSwitcher의 드롭다운에서 실제 번역을 실행시키는 용도로만 사용합니다.
export default function GoogleTranslate() {
  useEffect(() => {
    if (window.google && window.google.translate) return;

    window.googleTranslateElementInit = function () {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ko",
          includedLanguages: "en,zh-CN,zh-TW,ja,vi,th,id",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
