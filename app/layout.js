import "./globals.css";
import data from "@/content/data.json";
import GoogleTranslate from "@/components/GoogleTranslate";
import ScrollReveal from "@/components/ScrollReveal";
import ChannelFab from "@/components/ChannelFab";

export const metadata = {
  title: data.site.title,
  description: data.site.description,
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
