import "./globals.css";
import data from "@/content/data.json";
import GoogleTranslate from "@/components/GoogleTranslate";
import ScrollReveal from "@/components/ScrollReveal";
import ChannelFab from "@/components/ChannelFab";

export const metadata = {
  metadataBase: new URL("https://www.komechi.co.kr"),
  title: data.site.title,
  description: data.site.description,
  // 카톡·문자 등에 링크를 보냈을 때 나오는 미리보기(제목·설명·이미지)
  openGraph: {
    type: "website",
    siteName: "C&L 코메치 연구소",
    title: "C&L 코메치 연구소 | 무기질 세라믹 기능성 도료 세라엑스(ceraX)",
    description: "오래 지키는 표면이 지속 가능한 내일을 만듭니다. 무기질 세라믹 기능성 도료 개발 · 제조와 경영컨설팅 · PM",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "C&L 코메치 연구소" }],
    locale: "ko_KR",
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">
        <GoogleTranslate />
        {children}
        <ScrollReveal />
        <ChannelFab channels={data.channels.items} />
      </body>
    </html>
  );
}
