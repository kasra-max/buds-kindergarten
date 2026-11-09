export default function PageHead({ title, intro }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
