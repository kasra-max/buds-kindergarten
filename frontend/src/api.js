import { useEffect, useState } from "react";

export const API = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function post(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export function useApi(path) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    let off = false;
    fetch(`${API}${path}`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => !off && setState({ data, loading: false, error: null }))
      .catch((error) => !off && setState({ data: null, loading: false, error }));
    return () => {
      off = true;
    };
  }, [path]);
  return state;
}
