import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PromiseSection from "@/components/PromiseSection";
import Partnership from "@/components/Partnership";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export const metadata = {
  title: `기업소개 | ${data.site.title}`,
  description: data.site.description,
};

export default function AboutPage() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <PromiseSection data={data.promise} />
        <Partnership data={data.partnership} />
        <Location data={data.location} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
