const API_BASE = (import.meta.env.VITE_API_BASE_URL as string) || "";

export function apiUrl(path: string) {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  if (!API_BASE) return path;
  return `${API_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export async function apiFetch(path: string, init?: RequestInit) {
  const url = apiUrl(path);
  return fetch(url, init);
}

export default apiFetch;
