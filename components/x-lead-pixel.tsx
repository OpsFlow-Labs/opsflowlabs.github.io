"use client";

import { useEffect } from "react";
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
  // Fires when a link whose data-cta starts with this prefix is clicked
  ctaPrefix: string;
};

// Reports an X Ads conversion when a visitor clicks a booking CTA.
// The booking links are mailto links, so there is no confirmation page;
// the click is the closest signal to a lead. Fires at most once per page view.
export default function XLeadPixel({ pid, ctaPrefix }: Props) {
  useEffect(() => {
    let fired = false;

    const onClick = (event: MouseEvent) => {
      if (fired) return;
      const target = event.target as Element | null;
      const cta = target?.closest(`[data-cta^="${ctaPrefix}"]`);
      if (!cta) return;

      fired = true;
      window.twttr?.conversion?.trackPid(pid, {
        tw_sale_amount: 0,
        tw_order_quantity: 0,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pid, ctaPrefix]);

  return (
    <Script src="https://platform.twitter.com/oct.js" strategy="afterInteractive" />
  );
}
