import { useId, useState } from "react";
import { post } from "../api";

// Generic form: renders fields, validates required ones, posts JSON to the API.
export default function ApiForm({ endpoint, fields, labels }) {
  const uid = useId();
  const empty = () => Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err | invalid

  const set = (name, value) => setValues((s) => ({ ...s, [name]: value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (fields.some((f) => f.required && !String(values[f.name]).trim())) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      await post(endpoint, values);
      setValues(empty());
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  const message = { invalid: labels.required, ok: labels.ok, err: labels.err }[status] || "";

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-grid">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const common = {
            id,
            name: f.name,
            value: values[f.name],
            onChange: (e) => set(f.name, e.target.value),
            required: f.required,
            autoComplete: f.autoComplete,
          };
          return (
            <div key={f.name} className={"field" + (f.wide ? " wide" : "")}>
              <label htmlFor={id}>
                {f.label}
                {f.required && <span aria-hidden="true"> *</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea rows="4" {...common} />
              ) : f.type === "select" ? (
                <select {...common}>
                  {f.options.map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              ) : (
                <input type={f.type} {...common} />
              )}
            </div>
          );
        })}
      </div>
      <button className="btn btn-sun" disabled={status === "sending"}>
        {status === "sending" ? labels.sending : labels.submit}
      </button>
      <p className={`form-msg ${status}`} role="status">
        {message}
      </p>
    </form>
  );
}
