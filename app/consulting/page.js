import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Consulting from "@/components/Consulting";
import Advisor from "@/components/Advisor";
import Footer from "@/components/Footer";

export const metadata = {
  title: `경영컨설팅 · 사업관리(PM) | ${data.site.title}`,
  description: data.consulting.subtitle,
};

export default function ConsultingPage() {
  return (
    <>
      <TopBar data={data.topBar} />
      <Header header={data.header} nav={data.nav} />
      <main>
        <PageHero data={data.pageHeroes.consulting} />
        <Consulting data={data.consulting} />
        <Advisor data={data.advisor} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
