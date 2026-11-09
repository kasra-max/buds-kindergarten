import { useI18n } from "../i18n";
import { useApi } from "../api";

export default function NewsList({ limit }) {
  const { t, lang, fmtDate } = useI18n();
  const { data, loading } = useApi("/news/");

  if (loading) return <p className="muted">…</p>;

  let items = (data || []).map((n) => ({
    id: n.id,
    title: n[`title_${lang}`] || n.title_en || n.title_ar,
    body: n[`body_${lang}`] || n.body_en || n.body_ar,
    date: n.created,
    image: n.image,
  }));
  // Until the first post is added in the admin, show sample posts.
  if (items.length === 0) {
    items = t("news.samples").map((s, i) => ({ id: `sample-${i}`, ...s }));
  }
  if (limit) items = items.slice(0, limit);

  return (
    <ul className="news-list">
      {items.map((n) => (
        <li key={n.id}>
          <time dateTime={n.date}>{fmtDate(n.date)}</time>
          <div>
            <h3>{n.title}</h3>
            <p>{n.body}</p>
          </div>
          {n.image && <img src={n.image} alt="" loading="lazy" />}
        </li>
      ))}
    </ul>
  );
}
