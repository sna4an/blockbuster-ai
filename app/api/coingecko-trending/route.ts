import { NextResponse } from "next/server";
export async function POST() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}