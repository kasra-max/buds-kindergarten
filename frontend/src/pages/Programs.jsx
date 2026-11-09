import { useI18n } from "../i18n";
import PageHead from "../components/PageHead";

const TONES = ["sun", "leaf", "berry"];

export default function Programs() {
  const { t } = useI18n();
  const programs = t("programs.items");
  const schedule = t("schedule.items");
  const faq = t("faq.items");

  return (
    <>
      <PageHead title={t("programs.title")} intro={t("programs.intro")} />

      <section className="section">
        <div className="wrap progs">
          {programs.map((p, i) => (
            <article key={p.name} className={`prog ${TONES[i]}`}>
              <span className="age">{p.age}</span>
              <h2>{p.name}</h2>
              <p>{p.text}</p>
              <ul className="checks">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap narrow">
          <h2>{t("schedule.title")}</h2>
          <ol className="schedule">
            {schedule.map((s) => (
              <li key={s.time}>
                <time dir="ltr">{s.time}</time>
                <span>{s.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>{t("faq.title")}</h2>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
