export const metadata = {
  title: "Book a Free Security Call | OpsFlow Labs",
  description:
    "Pick a time for a free 30-minute call about securing your crypto platform's infrastructure.",
  robots: { index: false, follow: false },
};

import BookingPage from "@/components/booking-page";

export default function CryptoSecurityBook() {
  return (
    <BookingPage
      heading="Book a Free Security Call"
      subheading="30 minutes. We'll review how your platform handles keys, credentials and access, and point out the first risks worth fixing."
    />
  );
}
