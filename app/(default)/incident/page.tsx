export const metadata = {
  title: "Been Hacked? Get Help Today | OpsFlow Labs",
  description:
    "Leaked API key, compromised account or suspicious activity in your cloud? Book a call and we'll help you contain it, find out what happened and lock it down.",
  robots: { index: false, follow: false },
};

import ScheduleButton from "@/components/schedule-button";
import { BOOKING_URL_INCIDENT } from "@/config/booking";

const firstSteps = [
  {
    title: "Rotate the exposed keys",
    content:
      "Revoke and reissue any API keys, tokens or passwords that may have leaked, starting with cloud and AI provider keys.",
  },
  {
    title: "Cut off active sessions",
    content:
      "Sign out all sessions and disable any accounts or access you don't recognize.",
  },
  {
    title: "Keep the evidence",
    content:
      "Don't delete servers, logs or suspicious files yet. They show how the attacker got in and what they touched.",
  },
  {
    title: "Watch your bills",
    content:
      "Check cloud and AI provider usage for spikes. Stolen keys are often used to run up charges fast.",
  },
];

const help = [
  {
    title: "Contain",
    content:
      "We help you shut the attacker out: rotate credentials, close the access they used and stop any ongoing damage.",
  },
  {
    title: "Investigate",
    content:
      "We go through your logs to find how they got in, what they accessed and whether customer data was exposed.",
  },
  {
    title: "Lock it down",
    content:
      "We fix the root cause and move secrets to short-lived, least-privilege access so the same hole can't be used again.",
  },
];

const bookButton = (id: string) => (
  <ScheduleButton
    href={BOOKING_URL_INCIDENT}
    label="GET HELP NOW"
    dataCta={`incident-${id}`}
  />
);

export default function Incident() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4">Been Hacked? We Can Help Today.</h1>
              <p className="text-xl text-gray-400 mb-8">
                Leaked API key, compromised account or strange activity in
                your cloud? Book the earliest call available. We&apos;ll walk
                through what happened, help you contain it and lock it down.
              </p>
              <div className="flex justify-center">{bookButton("hero")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to do right now */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-10">
              <h2 className="h2 mb-4">Do This Right Now</h2>
              <p className="text-xl text-gray-400">
                Before your call, these four steps limit the damage.
              </p>
            </div>
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none">
              {firstSteps.map((step, i) => (
                <div key={step.title} className="bg-gray-800 p-6">
                  <div className="text-sm font-semibold text-[#8d8dff] mb-2">
                    STEP {i + 1}
                  </div>
                  <h3 className="h4 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-16 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-10">
              <h2 className="h2 mb-4">How We Help</h2>
              <p className="text-xl text-gray-400">
                Years of hands-on cloud and DevOps security work, focused on
                getting you back to normal fast.
              </p>
            </div>
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:max-w-none">
              {help.map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="h4 mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-400">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-4">Don&apos;t Wait for It to Get Worse</h2>
              <p className="text-xl text-gray-400 mb-8">
                Pick a time and add a line about what happened. It takes a
                minute.
              </p>
              <div className="flex justify-center">{bookButton("final")}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
