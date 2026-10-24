"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

// X Ads "Site visit - all pages" tag. Reports every page view so X can
// build a retargeting audience of site visitors.
const X_SITE_VISIT_PIXEL_ID = "rhxld";

// Loads X's tracking script once for the whole site and reports a site
// visit on every page view, including client-side navigations.
export default function XSiteTracking() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    window.twttr?.conversion?.trackPid(X_SITE_VISIT_PIXEL_ID, {
      tw_sale_amount: 0,
      tw_order_quantity: 0,
    });
  }, [ready, pathname]);

  return (
    <Script
      id="x-oct-js"
      src="https://platform.twitter.com/oct.js"
      strategy="afterInteractive"
      onReady={() => setReady(true)}
    />
  );
}
