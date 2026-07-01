import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const limit = body.limit || 20;
  const res = await fetch("https://gamma-api.polymarket.com/events?limit=" + limit);
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}