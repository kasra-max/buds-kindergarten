import { useI18n } from "../i18n";
import PageHead from "../components/PageHead";
import ApiForm from "../components/ApiForm";

// Paste the "embed map" URL here (Google Maps: Share > Embed a map, copy the src
// value; or OpenStreetMap: Share > HTML). While empty, a styled address box shows.
const MAP_SRC = "";

export default function Contact() {
  const { t } = useI18n();
  const f = t("contact.form");
  const phone = t("contact.phoneValue");

  const fields = [
    { name: "name", label: f.name, type: "text", required: true, autoComplete: "name" },
    { name: "email", label: f.email, type: "email", required: true, autoComplete: "email" },
    { name: "phone", label: f.phone, type: "tel", autoComplete: "tel", wide: true },
    { name: "message", label: f.message, type: "textarea", required: true, wide: true },
  ];

  return (
    <>
      <PageHead title={t("contact.title")} intro={t("contact.intro")} />

      <section className="section">
        <div className="wrap split">
          <dl className="info">
            <dt>{t("contact.address")}</dt>
            <dd>{t("contact.addressValue")}</dd>
            <dt>{t("contact.phone")}</dt>
            <dd>
              <a href={`tel:${phone.replace(/\s/g, "")}`} dir="ltr">
                {phone}
              </a>
            </dd>
            <dt>{t("contact.email")}</dt>
            <dd>
              <a href={`mailto:${t("contact.emailValue")}`}>{t("contact.emailValue")}</a>
            </dd>
            <dt>{t("contact.hours")}</dt>
            <dd>{t("contact.hoursValue")}</dd>
          </dl>

          {MAP_SRC ? (
            <iframe
              className="map"
              title={t("contact.address")}
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map map-empty">
              <p>{t("contact.addressValue")}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap narrow">
          <h2>{f.title}</h2>
          <div className="form-card">
            <ApiForm endpoint="/contact/" fields={fields} labels={f} />
          </div>
        </div>
      </section>
    </>
  );
}
