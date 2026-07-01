import { NextRequest, NextResponse } from "next/server";
import { callRapidAPI } from "../../../lib/rapidapi";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await callRapidAPI("translate-all-languages.p.rapidapi.com", "/translate", body);
    return NextResponse.json({ success: true, data });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}