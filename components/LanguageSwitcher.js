"use client";

export default function LanguageSwitcher({ languages }) {
  function handleChange(e) {
    const code = e.target.value;

    if (code === "ko") {
      // 구글 번역 위젯은 "원래 언어로 복귀"를 일반 언어 선택과 다르게 처리하므로,
      // 번역 쿠키를 지우고 새로고침해서 확실하게 원문(한국어)으로 되돌립니다.
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      window.location.reload();
      return;
    }

    // 구글 번역 위젯이 만든 숨겨진 select를 찾아서 값 변경 → 실제 번역 실행
    const findCombo = () => document.querySelector(".goog-te-combo");

    const trigger = (combo) => {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    };

    const combo = findCombo();
    if (combo) {
      trigger(combo);
      return;
    }

    // 위젯 스크립트가 아직 로딩 중이면 잠깐 기다렸다가 재시도
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      const retryCombo = findCombo();
      if (retryCombo) {
        trigger(retryCombo);
        clearInterval(interval);
      } else if (attempts > 20) {
        clearInterval(interval);
      }
    }, 300);
  }

  return (
    <select
      onChange={handleChange}
      defaultValue="ko"
      className="notranslate rounded-md border border-gray-200 px-3 py-1.5 text-sm text-slate-700"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
