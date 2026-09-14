import "./globals.css";
import data from "@/content/data.json";
import GoogleTranslate from "@/components/GoogleTranslate";

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
      </body>
    </html>
  );
}
