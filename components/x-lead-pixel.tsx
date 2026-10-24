"use client";

import Script from "next/script";

declare global {
  interface Window {
    twttr?: {
      conversion?: {
        trackPid: (pid: string, params?: Record<string, unknown>) => void;
      };
    };
  }
}

type Props = {
  // X Ads conversion tag ID (website_tag_id), e.g. "rhx6u"
  pid: string;
};

// Reports an X Ads conversion once, when the page loads.
// Render it only on a confirmation page (e.g. after a Calendly booking).
export default function XLeadPixel({ pid }: Props) {
  return (
    <Script
      src="https://platform.twitter.com/oct.js"
      strategy="afterInteractive"
      onReady={() =>
        window.twttr?.conversion?.trackPid(pid, {
          tw_sale_amount: 0,
          tw_order_quantity: 0,
        })
      }
    />
  );
}
