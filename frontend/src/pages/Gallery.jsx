import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { useApi } from "../api";
import PageHead from "../components/PageHead";

const SAMPLE_IMAGES = ["painting", "planting", "story", "sand", "music", "blocks"].map(
  (name) => `/gallery/${name}.svg`
);

export default function Gallery() {
  const { t, lang } = useI18n();
  const { data, loading } = useApi("/gallery/");
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const photos = (data || []).map((g) => ({
    id: g.id,
    src: g.image,
    caption: g[`caption_${lang}`] || g.caption_en || g.caption_ar || "",
  }));
  // Until real photos are uploaded in the admin, show the sample illustrations
  // from public/gallery (one per caption in translations.js).
  const items = photos.length
    ? photos
    : t("gallery.samples").map((caption, i) => ({
        id: `sample-${i}`,
        caption,
        src: SAMPLE_IMAGES[i],
      }));

  return (
    <>
      <PageHead title={t("gallery.title")} intro={t("gallery.intro")} />
      <section className="section">
        <div className="wrap">
          {loading ? (
            <p className="muted">…</p>
          ) : (
            <div className="gallery">
              {items.map((item, i) =>
                item.src ? (
                  <button key={item.id} className="tile photo" onClick={() => setOpen(item)}>
                    <img src={item.src} alt={item.caption} loading="lazy" />
                    {item.caption && <span>{item.caption}</span>}
                  </button>
                ) : (
                  <div key={item.id} className={`tile sample t${i % 4}`}>
                    <span>{item.caption}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.caption || t("gallery.title")}
          onClick={() => setOpen(null)}
        >
          <img src={open.src} alt={open.caption} onClick={(e) => e.stopPropagation()} />
          <button className="btn btn-sun" autoFocus onClick={() => setOpen(null)}>
            {t("gallery.close")}
          </button>
        </div>
      )}
    </>
  );
}
