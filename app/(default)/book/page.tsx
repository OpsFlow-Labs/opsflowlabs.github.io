export const metadata = {
  title: "Book a Free Consultation | OpsFlow Labs",
  description:
    "Pick a time for a free 30-minute consultation with OpsFlow Labs.",
  robots: { index: false, follow: false },
};

import BookingPage from "@/components/booking-page";

export default function Book() {
  return (
    <BookingPage
      heading="Book a Free Consultation"
      subheading="30 minutes. Tell us what you're working on and where you're stuck, and we'll point out the first things worth fixing."
    />
  );
}
