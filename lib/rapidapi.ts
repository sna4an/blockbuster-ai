export async function callRapidAPI(host: string, path: string, body: Record<string, unknown>) {
  const key = process.env.RAPIDAPI_KEY;
  if (!key) throw new Error("RAPIDAPI_KEY not set");
  const url = "https://" + host + path;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error("RapidAPI error " + res.status + ": " + errText);
  }
  return res.json();
}
