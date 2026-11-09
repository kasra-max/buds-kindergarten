import { useI18n } from "../i18n";
import PageHead from "../components/PageHead";

const TONES = ["sun", "leaf", "berry"];

export default function About() {
  const { t } = useI18n();
  const paragraphs = t("about.story.text");
  const teachers = t("about.teachers.items");
  const safety = t("about.safety.items");

  return (
    <>
      <PageHead title={t("about.title")} />

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>{t("about.story.title")}</h2>
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <aside className="mission">
            <h3>{t("about.mission.title")}</h3>
            <p>{t("about.mission.text")}</p>
          </aside>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <h2>{t("about.teachers.title")}</h2>
          <ul className="teachers">
            {teachers.map((p, i) => (
              <li key={p.name}>
                <span className={`avatar ${TONES[i % TONES.length]}`} aria-hidden="true">
                  {p.initial}
                </span>
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                <p>{p.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{t("about.safety.title")}</h2>
          <ul className="checks">
            {safety.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
