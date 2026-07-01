import { NextResponse } from "next/server";
export async function POST() {
  const res = await fetch("https://yields.llama.fi/pools");
  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json({ success: true, count: data.data?.length || 0, data: (data.data || []).slice(0, 100) });
}