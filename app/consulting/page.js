import data from "@/content/data.json";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
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
        <Consulting data={data.consulting} />
        <Advisor data={data.advisor} />
      </main>
      <Footer data={data.footer} />
    </>
  );
}
