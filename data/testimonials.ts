import type { StaticImageData } from "next/image";

import MarcinZajkowski from "@/public/images/marcin.jpeg";
import RobertMedeiros from "@/public/images/robert.jpeg";
import TomVogel from "@/public/images/tom.jpeg";

export type Testimonial = {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
};

export const testimonials = {
  marcin: {
    name: "Marcin Zajkowski",
    role: "Consultant, New Media Pilot Corporation",
    image: MarcinZajkowski,
    quote:
      "— OpsFlow Labs provided us with a thorough Security Audit of our Amazon Web Services systems. It was a pleasure interacting with him as a daunting process was made simple; granting efficiency and savings, allowing us to take the right steps to smoothen our operations. Glad to work with OpsFlow Labs and look forward to our next engagement.",
  },
  robert: {
    name: "Robert Medeiros",
    role: "Software Architect, TELUS",
    image: RobertMedeiros,
    quote:
      "— I have much respect for OpsFlow Lab's insight and hard work at TELUS, where their focus on building tools and culture to support CD/CD and DevOps practices made my work easier, more pleasant, and had a direct impact on the quality and speed with which we were able to ship code.",
  },
  tom: {
    name: "Tom Vogel",
    role: "Director of Engineering, AppDirect",
    image: TomVogel,
    quote:
      "— OpsFlowLabs brought forth significant improvements to our Reference Architecture, developed application Starter Kits, set up bleeding-edge Infrastructure as Code with Terraform, revolutionized Secrets management with Vault, expedited application delivery with OpenShift, created innumerable build pipelines in Jenkins and Circle CI, flaunted impressive dashboards made with BigQuery and DataStudio, and much more.",
  },
} satisfies Record<string, Testimonial>;

export type TestimonialId = keyof typeof testimonials;
