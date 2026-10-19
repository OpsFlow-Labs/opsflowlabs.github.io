export const metadata = {
  title: "AI Security Consulting | OpsFlow Labs",
  description:
    "Find and fix the security gaps your AI features introduce: model API keys, data exposure, agent permissions and cloud access.",
  robots: { index: false, follow: false },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import News from "@/components/blog";
import FinalCta from "@/components/final-cta";
import { BOOKING_URL_AI_SECURITY } from "@/config/booking";

const cta = (id: string) => ({
  href: BOOKING_URL_AI_SECURITY,
  label: "BOOK A FREE SECURITY CALL",
  dataCta: `ai-security-${id}`,
});

export default function AiSecurity() {
  return (
    <>
      <Hero
        headline="Ship AI Features Without Opening New Security Holes"
        subheadline="LLM integrations bring new API keys, new data flows and new permissions into your stack. We review them, find the gaps and help your team close them before a customer or an auditor finds them first."
        body={null}
        cta={cta("hero")}
      />
      <Features
        id="services"
        heading="What We Cover"
        subheading="A focused review of the places where AI features most often create risk."
        items={[
          {
            title: "AI Security Assessment",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We map how your AI features handle data, credentials and
                permissions, from user prompt to model provider and back, then
                give you a prioritized list of risks with concrete fixes.
              </p>
            ),
          },
          {
            title: "Secrets and Access Hardening",
            content: (
              <p className="text-lg text-gray-400 text-center">
                Model API keys, vector databases and agent tools often run on
                long-lived, over-privileged credentials. We move them to
                short-lived, least-privilege access using tools like HashiCorp
                Vault.
              </p>
            ),
          },
          {
            title: "Guardrails and Audit Trails",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We help you put controls around prompt injection, data leakage
                and agent actions, and log what accessed sensitive data, so you
                can answer security reviews with evidence.
              </p>
            ),
          },
        ]}
        cta={cta("services")}
      />
      <Testimonials
        ids={["marcin"]}
        heading="Trusted With Production Security"
        subheading="What clients say about working with us on cloud security."
        cta={cta("testimonials")}
      />
      <News
        slugs={["case-study-crypto-platform-vault"]}
        heading="Security Work in Practice"
        cta={cta("case-studies")}
      />
      <FinalCta
        heading="Find Out Where Your AI Stack Is Exposed"
        subheading="Book a free call. We'll walk through your AI setup and point out the first risks worth fixing."
        cta={cta("final")}
      />
    </>
  );
}
