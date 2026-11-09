import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import SproutArt from "../components/SproutArt";
import NewsList from "../components/NewsList";

const TONES = ["sun", "leaf", "berry", "ink"];

export default function Home() {
  const { t } = useI18n();
  const values = t("values.items");
  const programs = t("programs.items");

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>{t("hero.title")}</h1>
            <p className="lead">{t("hero.text")}</p>
            <div className="actions">
              <Link className="btn btn-sun" to="/admission">
                {t("hero.primary")}
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                {t("hero.secondary")}
              </Link>
            </div>
          </div>
          <SproutArt />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{t("values.title")}</h2>
          <ul className="values">
            {values.map((v, i) => (
              <li key={v.title} className={TONES[i % TONES.length]}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="row-head">
            <h2>{t("programsTeaser.title")}</h2>
            <Link to="/programs">{t("programsTeaser.more")}</Link>
          </div>
          <div className="progs">
            {programs.map((p, i) => (
              <article key={p.name} className={`prog ${TONES[i]}`}>
                <span className="age">{p.age}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="row-head">
            <h2>{t("news.latest")}</h2>
            <Link to="/news">{t("news.all")}</Link>
          </div>
          <NewsList limit={3} />
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.text")}</p>
          </div>
          <Link className="btn btn-sun" to="/contact">
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
