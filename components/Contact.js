"use client";

import { useState } from "react";

export default function Contact({ data }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [debugMessage, setDebugMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", data.web3formsAccessKey);
    formData.append("subject", `[홈페이지 문의] ${formData.get("inquiry_type")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setDebugMessage(result.message || "알 수 없는 오류");
      }
    } catch (err) {
      setStatus("error");
      setDebugMessage(String(err));
    }
  }

  return (
    <section id={data.id} className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid overflow-hidden rounded-2xl shadow-lg lg:grid-cols-2">
        <div className="bg-slate-900 p-10 text-white">
          <p className="text-sm font-bold tracking-wide text-blue-400">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug">
            {data.sideTitle}
          </h2>
          <p className="mt-4 text-sm text-slate-300">{data.sideSubtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={data.kakaoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg bg-blue-600 px-4 py-5 text-center transition hover:bg-blue-700"
            >
              <span className="text-2xl">💬</span>
              <span className="text-sm font-semibold">{data.kakaoText}</span>
            </a>
            <a
              href="#inquiry-form"
              className="flex flex-col items-center gap-2 rounded-lg bg-white/10 px-4 py-5 text-center ring-1 ring-white/30 transition hover:bg-white/20"
            >
              <span className="text-2xl">✉️</span>
              <span className="text-sm font-semibold">
                {data.emailButtonText}
              </span>
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {data.infoBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10"
              >
                <p className="font-semibold">{block.title}</p>
                <p className="mt-1 text-sm text-slate-300">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          id="inquiry-form"
          onSubmit={handleSubmit}
          className="bg-white p-10"
        >
          <p className="text-sm font-bold tracking-wide text-blue-600">
            {data.formEyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            {data.formTitle}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{data.formSubtitle}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                이름
              </label>
              <input
                name="name"
                required
                placeholder="성함을 입력하십시오"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">
                회사명
              </label>
              <input
                name="company"
                placeholder="회사명을 입력하십시오"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">
                연락처
              </label>
              <input
                name="phone"
                required
                placeholder="연락 가능한 번호를 입력하십시오"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">
                이메일
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="회신받을 이메일을 입력하십시오"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-slate-700">
              문의 유형
            </label>
            <select
              name="inquiry_type"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              {data.inquiryTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-slate-700">
              문의 내용
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="적용 대상 시설, 필요 성능, 검토 희망 자료, 일정 등을 입력하십시오"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <p className="mt-1 text-xs text-gray-400">
              도면, 사진 등 첨부 자료가 있으시면 카카오톡 상담 또는{" "}
              {data.recipientEmail}로 직접 보내주세요.
            </p>
          </div>

          <label className="mt-4 flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" required className="mt-0.5" />
            {data.consentText}
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex-1 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {status === "sending" ? "전송 중..." : data.submitText}
            </button>
            <a
              href={data.kakaoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-900"
            >
              {data.kakaoSubmitText}
            </a>
          </div>

          {status === "success" && (
            <p className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
              {data.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
              {data.errorMessage}
              {debugMessage && (
                <span className="mt-1 block text-xs text-red-500">
                  (상세: {debugMessage})
                </span>
              )}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
