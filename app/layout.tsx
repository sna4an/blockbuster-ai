import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockbuster.ai - The Ultimate Multi-API Hub",
  description: "115+ premium paid endpoints: Social Media, AI/ML, E-commerce, Finance, Data Intelligence, Media, Tools. x402 micropayments on Base chain.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0a0a0f", color: "#e0e0e0", fontFamily: "'Inter', -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
