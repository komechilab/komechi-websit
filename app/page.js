import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Business from "@/components/Business";
import Partnership from "@/components/Partnership";
import PromiseSection from "@/components/PromiseSection";
import Process from "@/components/Process";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <Hero data={data.hero} />
        <Business data={data.business} />
        <Partnership data={data.partnership} />
        <PromiseSection data={data.promise} />
        <Process data={data.process} />
        <Location data={data.location} />
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
