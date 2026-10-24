import CalendlyEmbed from "@/components/calendly-embed";
import { CALENDLY_URL } from "@/config/booking";

type Props = {
  heading: string;
  subheading: string;
  // X Ads conversion tag ID to report bookings as leads (optional)
  xPixelId?: string;
};

// On-site booking page with the Calendly widget embedded.
export default function BookingPage({ heading, subheading, xPixelId }: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h1 className="h2 mb-4">{heading}</h1>
            <p className="text-xl text-gray-400">{subheading}</p>
          </div>
          <CalendlyEmbed url={CALENDLY_URL} xPixelId={xPixelId} />
        </div>
      </div>
    </section>
  );
}
