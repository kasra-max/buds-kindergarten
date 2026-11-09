import { Link } from "react-router-dom";
import { useI18n } from "../i18n";
import Logo from "./Logo";
import { NAV } from "./nav";

export default function Footer() {
  const { t } = useI18n();
  const phone = t("contact.phoneValue");
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <div className="brand">
            <Logo />
            <span>{t("brand.name")}</span>
          </div>
          <p>{t("brand.tagline")}</p>
        </div>
        <div>
          <h3>{t("footer.links")}</h3>
          <ul>
            {NAV.map(([to, key]) => (
              <li key={to}>
                <Link to={to}>{t(`nav.${key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("contact.title")}</h3>
          <ul>
            <li>{t("contact.addressValue")}</li>
            <li>
              <a href={`tel:${phone.replace(/\s/g, "")}`} dir="ltr">
                {phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${t("contact.emailValue")}`}>{t("contact.emailValue")}</a>
            </li>
            <li>{t("contact.hoursValue")}</li>
          </ul>
        </div>
      </div>
      <p className="wrap copy">
        © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
      </p>
    </footer>
  );
}
