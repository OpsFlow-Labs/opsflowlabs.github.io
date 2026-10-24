export const metadata = {
  title: "Book a Free Intro Call | OpsFlow Labs",
  description:
    "Pick a time for a free 30-minute intro call about fractional CTO support.",
  robots: { index: false, follow: false },
};

import BookingPage from "@/components/booking-page";

export default function FractionalCtoBook() {
  return (
    <BookingPage
      heading="Book a Free Intro Call"
      subheading="30 minutes. Tell us where your engineering team is stuck, and we'll tell you honestly whether a fractional CTO is the right fix."
    />
  );
}
