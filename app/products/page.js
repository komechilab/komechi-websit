import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Business from "@/components/Business";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata = {
  title: `제품소개 | ${data.site.title}`,
  description: data.site.description,
};

export default function ProductsPage() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <Business data={data.business} />
        <Process data={data.process} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
