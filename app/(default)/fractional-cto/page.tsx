export const metadata = {
  title: "Fractional CTO Services | OpsFlow Labs",
  description:
    "Senior technical leadership without a full-time hire: engineering hiring, architecture and delivery leadership from OpsFlow Labs.",
  robots: { index: false, follow: false },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import News from "@/components/blog";
import FinalCta from "@/components/final-cta";
import { BOOKING_URL_FRACTIONAL_CTO } from "@/config/booking";

const cta = (id: string) => ({
  href: BOOKING_URL_FRACTIONAL_CTO,
  label: "BOOK A FREE INTRO CALL",
  dataCta: `fractional-cto-${id}`,
});

export default function FractionalCto() {
  return (
    <>
      <Hero
        headline="Senior Technical Leadership, Without the Full-Time CTO Hire"
        subheadline="Get an experienced technology leader to shape your architecture, build your engineering team and fix how you ship, part-time and at the pace your company needs."
        body={null}
        cta={cta("hero")}
      />
      <Features
        id="services"
        heading="How We Help"
        subheading="Hands-on leadership in the three areas that decide how fast your team can move."
        items={[
          {
            title: "Engineering Hiring",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We define the roles you actually need, write the job specs, run
                technical interviews and help you close strong engineers, on
                contract, full-time or contract-to-hire.
              </p>
            ),
          },
          {
            title: "Architecture and Technical Strategy",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We review your current systems, set a reference architecture
                and roadmap that fit your stage, and make the build-versus-buy
                calls you shouldn&apos;t have to guess at.
              </p>
            ),
          },
          {
            title: "Technical Leadership",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We put the delivery practices, CI/CD and infrastructure basics
                in place, coach your engineers and leads, and represent
                engineering to founders, the board and investors.
              </p>
            ),
          },
        ]}
        cta={cta("services")}
      />
      <Testimonials
        ids={["tom", "robert"]}
        heading="From Engineering Leaders We've Worked With"
        subheading="How teams describe the impact on their architecture, tooling and delivery."
        cta={cta("testimonials")}
      />
      <News
        slugs={[
          "case-study-digital-transformation",
          "case-study-platform-reliability-audio-streaming",
        ]}
        heading="Leadership in Practice"
        cta={cta("case-studies")}
      />
      <FinalCta
        heading="Get a Technical Leader on Your Side"
        subheading="Book a free intro call. Tell us where your engineering team is stuck, and we'll tell you honestly whether a fractional CTO is the right fix."
        cta={cta("final")}
      />
    </>
  );
}
