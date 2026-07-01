import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const ids = body.ids || "bitcoin";
  const vs = body.vs_currencies || "usd";
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=" + ids + "&vs_currencies=" + vs);
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}