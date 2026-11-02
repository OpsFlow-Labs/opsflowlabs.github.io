export const metadata = {
  title: "Get Help With a Security Incident | OpsFlow Labs",
  description:
    "Pick the earliest time that works and tell us what happened. We'll help you contain it and lock it down.",
  robots: { index: false, follow: false },
};

import BookingPage from "@/components/booking-page";

// X Ads "Lead - Incident call booked" conversion tag
const X_INCIDENT_PIXEL_ID = "ricwa";

export default function IncidentBook() {
  return (
    <BookingPage
      heading="Get Help With a Security Incident"
      subheading="Pick the earliest time that works and add a line about what happened. We'll come prepared with first steps."
      xPixelId={X_INCIDENT_PIXEL_ID}
    />
  );
}
