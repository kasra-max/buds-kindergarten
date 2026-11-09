import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n";
import Logo from "./Logo";
import { NAV } from "./nav";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const other = lang === "ar" ? "en" : "ar";

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span>{t("brand.name")}</span>
        </Link>
        <nav id="main-nav" className={open ? "open" : ""} aria-label="Main">
          {NAV.map(([to, key]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>
        <button className="pill-btn" lang={other} onClick={() => setLang(other)}>
          {t("lang.switch")}
        </button>
        <button
          className="pill-btn menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {t("nav.menu")}
        </button>
      </div>
    </header>
  );
}
