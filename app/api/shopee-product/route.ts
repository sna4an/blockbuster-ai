import { NextRequest, NextResponse } from "next/server";
import { callRapidAPI } from "../../../lib/rapidapi";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await callRapidAPI("shopee-product-scraper2.p.rapidapi.com", "/product", body);
    return NextResponse.json({ success: true, data });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}