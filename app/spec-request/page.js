import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import SpecRequest from "@/components/SpecRequest";
import Footer from "@/components/Footer";

export const metadata = {
  title: `${data.specRequest.title} | ${data.site.title}`,
  description: data.specRequest.subtitle,
};

export default function SpecRequestPage() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <PageHero data={data.pageHeroes.specRequest} />
        <SpecRequest data={data.specRequest} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
