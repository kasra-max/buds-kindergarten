import { useI18n } from "../i18n";
import PageHead from "../components/PageHead";
import NewsList from "../components/NewsList";

export default function News() {
  const { t } = useI18n();
  return (
    <>
      <PageHead title={t("news.title")} intro={t("news.intro")} />
      <section className="section">
        <div className="wrap narrow">
          <NewsList />
        </div>
      </section>
    </>
  );
}
