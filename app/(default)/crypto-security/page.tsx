export const metadata = {
  title: "Crypto Platform Security | OpsFlow Labs",
  description:
    "Infrastructure security for crypto platforms: secrets and key management, cloud hardening, secure CI/CD and audit-ready access controls.",
  robots: { index: false, follow: false },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import News from "@/components/blog";
import FinalCta from "@/components/final-cta";
import { BOOKING_URL_CRYPTO_SECURITY } from "@/config/booking";

const cta = (id: string) => ({
  href: BOOKING_URL_CRYPTO_SECURITY,
  label: "BOOK A FREE SECURITY CALL",
  dataCta: `crypto-security-${id}`,
});

export default function CryptoSecurity() {
  return (
    <>
      <Hero
        headline="Lock Down the Infrastructure Behind Your Crypto Platform"
        subheadline="Your contracts may be audited, but most breaches start with a leaked credential, an over-privileged service or a compromised pipeline. We secure the cloud, secrets and access layers your platform runs on."
        body={null}
        cta={cta("hero")}
      />
      <Features
        id="services"
        heading="What We Secure"
        subheading="The infrastructure layers attackers target first on trading and blockchain platforms."
        items={[
          {
            title: "Secrets and Key Management",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We replace static credentials and shared config files with
                centralized, short-lived secrets in HashiCorp Vault, with
                automated rotation and least-privilege access for every
                service.
              </p>
            ),
          },
          {
            title: "Cloud and Pipeline Hardening",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We audit your cloud accounts and CI/CD pipelines, remove
                hardcoded credentials and excess permissions, and define the
                fixes as code so they stay fixed.
              </p>
            ),
          },
          {
            title: "Audit Trails and Compliance Readiness",
            content: (
              <p className="text-lg text-gray-400 text-center">
                We log every access to sensitive credentials and feed it into
                your monitoring, so you can spot anomalies fast and hand
                auditors a verifiable record.
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
        slugs={[
          "case-study-crypto-platform-vault",
          "case-study-hashicorp-vault",
          "case-study-securing-cicd-pipelines-vault",
        ]}
        heading="Security Work in Practice"
        cta={cta("case-studies")}
      />
      <FinalCta
        heading="Find the Gaps Before an Attacker Does"
        subheading="Book a free call. We'll review how your platform handles keys, credentials and access, and point out the first risks worth fixing."
        cta={cta("final")}
      />
    </>
  );
}
