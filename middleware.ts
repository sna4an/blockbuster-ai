import { NextRequest, NextResponse } from "next/server";

const TREASURY = process.env.EVM_ADDRESS;
const FACILITATOR = process.env.FACILITATOR_URL || "https://facilitator.payai.network";
const NETWORK = "eip155:8453";
const ASSET = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

type RouteConfig = { price: string; desc: string; };
const R: Record<string, RouteConfig> = {
  "POST /api/twitter-v2-search": { price: "$0.08", desc: "Search tweets using Twitter v2 API" },
  "POST /api/twitter-user-info": { price: "$0.06", desc: "Get Twitter user profile information" },
  "POST /api/twitter-user-tweets": { price: "$0.07", desc: "Get tweets from a specific user" },
  "POST /api/twitter-user-followers": { price: "$0.08", desc: "Get followers of a Twitter user" },
  "POST /api/twitter-trending": { price: "$0.05", desc: "Get trending topics on Twitter" },
  "POST /api/botometer-check": { price: "$0.12", desc: "Check bot score for a Twitter account" },
  "POST /api/screenshot-twitter": { price: "$0.10", desc: "Screenshot a Twitter/X post" },
  "POST /api/twitter-v1-timeline": { price: "$0.06", desc: "Get user timeline via Twitter v1.1" },
  "POST /api/twitter-aio-search": { price: "$0.09", desc: "All-in-one Twitter search" },
  "POST /api/x-twitter-user": { price: "$0.07", desc: "Get X/Twitter user data" },
  "POST /api/twitter-search-only": { price: "$0.06", desc: "Search-only Twitter endpoint" },
  "POST /api/twitter293-user": { price: "$0.06", desc: "Get Twitter user data alt" },
  "POST /api/twitter-x-profile": { price: "$0.07", desc: "Get X/Twitter profile details" },
  "POST /api/twitter-data-user": { price: "$0.06", desc: "Get Twitter user data source" },
  "POST /api/twitter135-search": { price: "$0.07", desc: "Search Twitter alt source" },
  "POST /api/twitter-api47-user": { price: "$0.06", desc: "Get Twitter user via API47" },
  "POST /api/twitter-api45-user": { price: "$0.06", desc: "Get Twitter user via API45" },
  "POST /api/twitter154-search": { price: "$0.07", desc: "Search Twitter alt 154" },
  "POST /api/instagram-scraper": { price: "$0.09", desc: "Scrape Instagram profile and posts" },
  "POST /api/instagram-downloader": { price: "$0.08", desc: "Download Instagram videos and stories" },
  "POST /api/instagram-statistics": { price: "$0.07", desc: "Get Instagram account statistics" },
  "POST /api/instagram-looter": { price: "$0.07", desc: "Get Instagram post data" },
  "POST /api/instagram-stable-scraper": { price: "$0.08", desc: "Stable Instagram scraper" },
  "POST /api/tiktok-scraper": { price: "$0.09", desc: "Scrape TikTok user and video data" },
  "POST /api/tiktok-scraper7": { price: "$0.08", desc: "TikTok scraper alt source" },
  "POST /api/tokapi-mobile": { price: "$0.07", desc: "TikTok mobile API proxy" },
  "POST /api/facebook-scraper": { price: "$0.09", desc: "Scrape Facebook page data" },
  "POST /api/facebook-pages-scraper": { price: "$0.08", desc: "Scrape Facebook pages listing" },
  "POST /api/linkedin-profile": { price: "$0.10", desc: "Get LinkedIn profile data" },
  "POST /api/linkedin-data": { price: "$0.09", desc: "Get LinkedIn data" },
  "POST /api/linkedin-scraper": { price: "$0.10", desc: "Scrape LinkedIn profiles" },
  "POST /api/linkedin-bulk-scraper": { price: "$0.15", desc: "Bulk scrape LinkedIn data" },
  "POST /api/linkedin-sales-navigator": { price: "$0.18", desc: "LinkedIn Sales Navigator search" },
  "POST /api/linkedin-data-scraper-alt": { price: "$0.10", desc: "LinkedIn data scraper alt" },
  "POST /api/threads-api": { price: "$0.07", desc: "Get Threads post and user data" },
  "POST /api/telegram-index": { price: "$0.08", desc: "Index and search Telegram channels" },
  "POST /api/telegram-channel": { price: "$0.07", desc: "Get Telegram channel data" },
  "POST /api/twitch-scraper": { price: "$0.07", desc: "Scrape Twitch streamer data" },
  "POST /api/chatgpt-4o": { price: "$0.15", desc: "ChatGPT-4o completions" },
  "POST /api/chatgpt-vision": { price: "$0.18", desc: "ChatGPT vision analysis" },
  "POST /api/copilot-chat": { price: "$0.12", desc: "Microsoft Copilot chat" },
  "POST /api/free-chatgpt": { price: "$0.05", desc: "Free ChatGPT API" },
  "POST /api/ai-content-detector": { price: "$0.08", desc: "Detect AI-generated content" },
  "POST /api/ai-image-detector": { price: "$0.10", desc: "Detect AI-generated images" },
  "POST /api/ai-overviews": { price: "$0.10", desc: "Google AI overviews data" },
  "POST /api/ai-text-to-image": { price: "$0.15", desc: "AI text-to-image generation" },
  "POST /api/runwayml-generate": { price: "$0.20", desc: "RunwayML AI generation" },
  "POST /api/shopee-scraper": { price: "$0.09", desc: "Scrape Shopee Indonesia products" },
  "POST /api/shopee-product": { price: "$0.08", desc: "Get Shopee product details" },
  "POST /api/shopee-all-in-one": { price: "$0.10", desc: "Shopee all-in-one scraper" },
  "POST /api/aliexpress-scraper": { price: "$0.09", desc: "Scrape AliExpress products" },
  "POST /api/amazon-realtime": { price: "$0.10", desc: "Real-time Amazon product data" },
  "POST /api/amazon-axesso": { price: "$0.09", desc: "Amazon data via Axesso" },
  "POST /api/ikea-products": { price: "$0.07", desc: "Search IKEA products" },
  "POST /api/ikea-api-pro": { price: "$0.07", desc: "IKEA API Pro search" },
  "POST /api/taobao-scraper": { price: "$0.09", desc: "Scrape Taobao products" },
  "POST /api/steam-business": { price: "$0.08", desc: "Steam marketplace data" },
  "POST /api/tradingview-technical": { price: "$0.12", desc: "TradingView technical analysis" },
  "POST /api/tradingview-screener": { price: "$0.12", desc: "TradingView stock screener" },
  "POST /api/twelve-data-quote": { price: "$0.08", desc: "Real-time stock quote" },
  "POST /api/alpha-vantage-quote": { price: "$0.08", desc: "Stock quote Alpha Vantage" },
  "POST /api/bloomberg-market": { price: "$0.15", desc: "Bloomberg real-time market data" },
  "POST /api/forex-factory": { price: "$0.07", desc: "Forex Factory calendar data" },
  "POST /api/binance-ticker": { price: "$0.06", desc: "Binance crypto ticker data" },
  "POST /api/coinmarketcap-quote": { price: "$0.07", desc: "CoinMarketCap crypto quote" },
  "POST /api/coinranking-coins": { price: "$0.06", desc: "Coinranking top coins" },
  "POST /api/exchangerate-convert": { price: "$0.05", desc: "Currency exchange rate" },
  "POST /api/live-metal-prices": { price: "$0.06", desc: "Live gold silver platinum prices" },
  "POST /api/indian-stock-exchange": { price: "$0.08", desc: "Indian stock exchange data" },
  "POST /api/indian-stock-moneycontrol": { price: "$0.09", desc: "Indian stock market live data" },
  "POST /api/defi-liquidation-alert": { price: "$0.12", desc: "DeFi liquidation alerts" },
  "POST /api/google-serp": { price: "$0.08", desc: "Google search engine results" },
  "POST /api/google-ad-library": { price: "$0.10", desc: "Google Ads library search" },
  "POST /api/real-time-news": { price: "$0.08", desc: "Real-time news data" },
  "POST /api/local-business-data": { price: "$0.09", desc: "Local business search data" },
  "POST /api/jsearch-jobs": { price: "$0.08", desc: "Job search via JSearch" },
  "POST /api/maps-data": { price: "$0.09", desc: "Maps Places data scraper" },
  "POST /api/website-contacts": { price: "$0.12", desc: "Extract contacts from websites" },
  "POST /api/website-social-scraper": { price: "$0.10", desc: "Scrape social data from websites" },
  "POST /api/skip-tracing": { price: "$0.15", desc: "Skip tracing people search" },
  "POST /api/apollo-io": { price: "$0.18", desc: "Apollo.io lead enrichment" },
  "POST /api/real-time-image-search": { price: "$0.06", desc: "Real-time image search" },
  "POST /api/youtube-search": { price: "$0.06", desc: "Search YouTube videos" },
  "POST /api/youtube-mp4": { price: "$0.08", desc: "Convert YouTube to MP4" },
  "POST /api/youtube-mp3": { price: "$0.08", desc: "Convert YouTube to MP3" },
  "POST /api/youtube-media-downloader": { price: "$0.08", desc: "Download YouTube media" },
  "POST /api/youtube-mp3-audio": { price: "$0.07", desc: "YouTube MP3 audio downloader" },
  "POST /api/yt-api": { price: "$0.06", desc: "YouTube API proxy" },
  "POST /api/spotify-data": { price: "$0.06", desc: "Spotify track artist data" },
  "POST /api/medium-articles": { price: "$0.06", desc: "Search Medium articles" },
  "POST /api/youtube-telegram-upload": { price: "$0.10", desc: "Upload YouTube to Telegram" },
  "POST /api/translate-all": { price: "$0.05", desc: "Translate text to any language" },
  "POST /api/bypass-cloudflare": { price: "$0.15", desc: "Bypass Cloudflare protection" },
  "POST /api/whatsapp-validator": { price: "$0.05", desc: "Validate WhatsApp numbers" },
  "POST /api/whatsapp-validator3": { price: "$0.05", desc: "Validate WhatsApp numbers alt" },
  "POST /api/whatsapp-data": { price: "$0.07", desc: "Get WhatsApp data" },
  "POST /api/truecaller-lookup": { price: "$0.10", desc: "Truecaller phone lookup" },
  "POST /api/scrapeninja": { price: "$0.12", desc: "ScrapeNinja web scraper" },
  "POST /api/flashapi-scraper": { price: "$0.10", desc: "FlashAPI web scraper" },
  "POST /api/bin-ip-checker": { price: "$0.05", desc: "BIN IP checker" },
  "POST /api/gmailnator": { price: "$0.06", desc: "Generate temp Gmail addresses" },
  "POST /api/booking-com": { price: "$0.10", desc: "Booking.com hotel search" },
  "POST /api/airbnb-search": { price: "$0.10", desc: "Airbnb listing search" },
  "POST /api/cricbuzz-cricket": { price: "$0.05", desc: "Cricbuzz live cricket scores" },
  "POST /api/defillama-tvl": { price: "$0.05", desc: "DeFiLlama TVL rankings" },
  "POST /api/defillama-yields": { price: "$0.06", desc: "DeFiLlama yield data" },
  "POST /api/defillama-protocols": { price: "$0.05", desc: "DeFiLlama protocol info" },
  "POST /api/coingecko-price": { price: "$0.05", desc: "CoinGecko crypto prices" },
  "POST /api/coingecko-coins": { price: "$0.06", desc: "CoinGecko coins market data" },
  "POST /api/coingecko-trending": { price: "$0.05", desc: "CoinGecko trending coins" },
  "POST /api/coinmarketcap-listing": { price: "$0.07", desc: "CMC top listings" },
  "POST /api/hyperliquid-meta": { price: "$0.05", desc: "Hyperliquid exchange metadata" },
  "POST /api/hyperliquid-orderbook": { price: "$0.08", desc: "Hyperliquid orderbook data" },
  "POST /api/polymarket-markets": { price: "$0.07", desc: "Polymarket prediction markets" },
  "POST /api/polymarket-events": { price: "$0.06", desc: "Polymarket events data" },
};

export async function middleware(req: NextRequest) {
  if (req.method === "OPTIONS") return NextResponse.next();
  const path = req.nextUrl.pathname;
  const key = "POST " + path;
  const route = R[key];
  if (!route) return NextResponse.next();
  const hasPayment = req.headers.get("x-payment");
  if (hasPayment) {
    try {
      const payload = JSON.parse(Buffer.from(hasPayment, "base64").toString());
      const verifyRes = await fetch(FACILITATOR + "/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          x402Version: 2,
          paymentPayload: payload,
          requirements: {
            scheme: "exact",
            network: NETWORK,
            amount: route.price.replace("$", ""),
            asset: ASSET,
            payTo: TREASURY,
            resource: { url: req.nextUrl.origin + path, description: route.desc, mimeType: "application/json" },
            maxTimeoutSeconds: 300,
            extra: { name: "USD Coin", version: "2" }
          }
        })
      });
      const vr = await verifyRes.json();
      if (vr.isValid) {
        const res = NextResponse.next();
        res.headers.set("x-payment-verified", "true");
        fetch(FACILITATOR + "/settle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            x402Version: 2,
            paymentPayload: payload,
            requirements: {
              scheme: "exact",
              network: NETWORK,
              amount: route.price.replace("$", ""),
              asset: ASSET,
              payTo: TREASURY,
              resource: { url: req.nextUrl.origin + path, description: route.desc, mimeType: "application/json" },
              maxTimeoutSeconds: 300,
              extra: { name: "USD Coin", version: "2" }
            }
          })
        }).catch(e => console.error("Settle:", e));
        return res;
      }
    } catch (e) { console.error("Verify:", e); }
  }
  const priceAtomic = String(Math.round(parseFloat(route.price.replace("$", "")) * 1000000));
  const requirements = {
    x402Version: 2,
    error: "Payment required",
    resource: { url: req.nextUrl.origin + path, description: route.desc, mimeType: "application/json" },
    accepts: [{
      scheme: "exact", network: NETWORK, amount: priceAtomic,
      asset: ASSET, payTo: TREASURY, maxTimeoutSeconds: 300,
      extra: { name: "USD Coin", version: "2" }
    }]
  };
  const encoded = Buffer.from(JSON.stringify(requirements)).toString("base64");
  const res = NextResponse.json({}, { status: 402 });
  res.headers.set("Payment-Required", encoded);
  return res;
}

export const config = { matcher: ["/api/:path*"] };