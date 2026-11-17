import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: `문의하기 | ${data.site.title}`,
  description: data.site.description,
};

export default function ContactPage() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
