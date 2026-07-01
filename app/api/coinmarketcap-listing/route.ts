import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const limit = body.limit || 20;
  const res = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=" + limit, {
    headers: { "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY || "" }
  });
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}