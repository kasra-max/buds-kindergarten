import { useI18n } from "../i18n";
import PageHead from "../components/PageHead";
import ApiForm from "../components/ApiForm";

export default function Admission() {
  const { t } = useI18n();
  const f = t("admission.form");
  const steps = t("admission.steps");
  const docs = t("admission.docs.items");

  const fields = [
    { name: "child_name", label: f.child, type: "text", required: true },
    { name: "birth_date", label: f.birth, type: "date", required: true },
    { name: "age_group", label: f.group, type: "select", required: true, options: Object.entries(f.groups) },
    { name: "parent_name", label: f.parent, type: "text", required: true, autoComplete: "name" },
    { name: "phone", label: f.phone, type: "tel", required: true, autoComplete: "tel" },
    { name: "email", label: f.email, type: "email", autoComplete: "email" },
    { name: "notes", label: f.notes, type: "textarea", wide: true },
  ];

  return (
    <>
      <PageHead title={t("admission.title")} intro={t("admission.intro")} />

      <section className="section">
        <div className="wrap">
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split">
          <div>
            <h2>{f.title}</h2>
            <div className="form-card">
              <ApiForm endpoint="/enrollments/" fields={fields} labels={f} />
            </div>
          </div>
          <aside>
            <h3>{t("admission.docs.title")}</h3>
            <ul className="checks">
              {docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
