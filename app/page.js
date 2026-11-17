import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeOverview from "@/components/HomeOverview";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <Hero data={data.hero} />
        <HomeOverview data={data.overview} />
        <QuickLinks data={data.quickLinks} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
