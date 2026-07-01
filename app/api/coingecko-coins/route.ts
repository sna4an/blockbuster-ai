import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const vs = body.vs_currency || "usd";
  const per = body.per_page || 20;
  const page = body.page || 1;
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + vs + "&per_page=" + per + "&page=" + page);
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}