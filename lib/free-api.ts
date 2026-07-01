export async function callFreeAPI(url: string, params?: Record<string, string>, method: string = "GET") {
  let fullUrl = url;
  if (params && method === "GET") {
    const qs = new URLSearchParams(params).toString();
    fullUrl = url + "?" + qs;
  }
  const opts: RequestInit = { method, headers: { "Content-Type": "application/json" } };
  if (params && method === "POST") opts.body = JSON.stringify(params);
  const res = await fetch(fullUrl, opts);
  if (!res.ok) throw new Error("Free API error " + res.status + ": " + await res.text());
  return res.json();
}
