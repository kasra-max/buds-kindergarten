import { createContext, useCallback, useContext, useEffect, useState } from "react";
import translations from "./translations";

const Ctx = createContext(null);

const get = (obj, path) =>
  path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "ar";
    } catch {
      return "ar";
    }
  });
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = get(translations[lang], "brand.name");
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage can be unavailable; the language just won't be remembered */
    }
  }, [lang, dir]);

  const t = useCallback((path) => get(translations[lang], path) ?? path, [lang]);

  const fmtDate = useCallback(
    (iso) =>
      new Intl.DateTimeFormat(lang === "ar" ? "ar-u-nu-latn" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(iso)),
    [lang]
  );

  return (
    <Ctx.Provider value={{ lang, setLang, dir, t, fmtDate }}>{children}</Ctx.Provider>
  );
}

export const useI18n = () => useContext(Ctx);
