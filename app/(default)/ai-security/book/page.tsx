export const metadata = {
  title: "Book a Free AI Security Call | OpsFlow Labs",
  description:
    "Pick a time for a free 30-minute call about the security of your AI features.",
  robots: { index: false, follow: false },
};

import BookingPage from "@/components/booking-page";

// X Ads "Lead - Booked call" conversion tag
const X_LEAD_PIXEL_ID = "rhx6u";

export default function AiSecurityBook() {
  return (
    <BookingPage
      heading="Book a Free AI Security Call"
      subheading="30 minutes. We'll walk through your AI setup and point out the first risks worth fixing."
      xPixelId={X_LEAD_PIXEL_ID}
    />
  );
}
