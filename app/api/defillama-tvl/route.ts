import { NextResponse } from "next/server";
export async function POST() {
  const res = await fetch("https://api.llama.fi/protocols");
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, count: data.length, data: data.slice(0, 100) });
}