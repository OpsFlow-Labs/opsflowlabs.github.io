export const metadata = {
  title: "Call Booked | OpsFlow Labs",
  description: "Your AI security call is booked.",
  robots: { index: false, follow: false },
};

import Link from "next/link";
import XLeadPixel from "@/components/x-lead-pixel";

// X Ads "Lead - Booked call" conversion tag.
// Calendly redirects here after someone books from the AI security page.
const X_LEAD_PIXEL_ID = "rhx6u";

export default function AiSecurityThanks() {
  return (
    <section>
      <XLeadPixel pid={X_LEAD_PIXEL_ID} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4">Your Call Is Booked</h1>
            <p className="text-xl text-gray-400 mb-8">
              Thanks for booking. You&apos;ll get a calendar invite by email.
              Before the call, it helps to note which AI features you run and
              which model providers they use.
            </p>
            <Link href="/ai-security" className="text-purple-400 hover:underline">
              Back to AI security
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
