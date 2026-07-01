import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const body = await request.json();
  const protocol = body.protocol || "aave";
  const res = await fetch("https://api.llama.fi/protocol/" + protocol);
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}