export const metadata = {
  title: "Book a Free AI Security Call | OpsFlow Labs",
  description:
    "Pick a time for a free 30-minute call about the security of your AI features.",
  robots: { index: false, follow: false },
};

import CalendlyEmbed from "@/components/calendly-embed";
import { CALENDLY_URL_AI_SECURITY } from "@/config/booking";

// X Ads "Lead - Booked call" conversion tag
const X_LEAD_PIXEL_ID = "rhx6u";

export default function AiSecurityBook() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h1 className="h2 mb-4">Book a Free AI Security Call</h1>
            <p className="text-xl text-gray-400">
              30 minutes. We&apos;ll walk through your AI setup and point out
              the first risks worth fixing.
            </p>
          </div>
          <CalendlyEmbed
            url={CALENDLY_URL_AI_SECURITY}
            xPixelId={X_LEAD_PIXEL_ID}
          />
        </div>
      </div>
    </section>
  );
}
