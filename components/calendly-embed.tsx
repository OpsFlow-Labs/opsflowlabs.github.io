"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
    twttr?: {
      conversion?: {
        trackPid: (pid: string, params?: Record<string, unknown>) => void;
      };
    };
  }
}

type Props = {
  // Calendly event link, e.g. https://calendly.com/name/30min
  url: string;
  // X Ads conversion tag ID (website_tag_id) to report when a call is booked
  xPixelId?: string;
};

// Calendly's inline booking widget. When a visitor finishes booking,
// Calendly posts a "calendly.event_scheduled" message to this page,
// which we report to X Ads as a lead (once per page view).
export default function CalendlyEmbed({ url, xPixelId }: Props) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!xPixelId) return;
    let fired = false;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      if (event.data?.event !== "calendly.event_scheduled" || fired) return;

      fired = true;
      window.twttr?.conversion?.trackPid(xPixelId, {
        tw_sale_amount: 0,
        tw_order_quantity: 0,
      });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [xPixelId]);

  const initWidget = () => {
    const parent = container.current;
    if (!parent || !window.Calendly) return;
    parent.innerHTML = "";
    window.Calendly.initInlineWidget({ url, parentElement: parent });
  };

  return (
    <>
      <div ref={container} style={{ minWidth: 320, height: 700 }} />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={initWidget}
      />
    </>
  );
}
