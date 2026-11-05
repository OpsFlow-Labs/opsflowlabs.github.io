export const metadata = {
  title: "AI Security Checklist | OpsFlow Labs",
  description:
    "16 checks for the API keys, data flows, agents and logging behind your AI features.",
  robots: { index: false, follow: false },
};

import ScheduleButton from "@/components/schedule-button";
import { BOOKING_URL_AI_SECURITY } from "@/config/booking";

const sections = [
  {
    title: "API Keys and Secrets",
    items: [
      "Model provider keys (OpenAI, Anthropic, etc.) are not in code, config files or chat history.",
      "Each environment and service has its own key, so one leak doesn't expose everything.",
      "Keys are rotated on a schedule, and you know how to rotate one in under an hour.",
      "Spending limits and usage alerts are set on every AI provider account.",
    ],
  },
  {
    title: "Data Going In and Out",
    items: [
      "You know which customer data can reach a model, and it's written down.",
      "Personal and secret data is removed or masked before it goes into prompts.",
      "Your AI provider's data retention and training settings match what you promise customers.",
      "Model output is treated as untrusted: it's checked before it's shown, stored or run.",
    ],
  },
  {
    title: "Agents and Tools",
    items: [
      "Each agent or tool integration runs with its own least-privilege credentials.",
      "Agents can't delete, pay, email or deploy without a human approving the action.",
      "Content from documents, web pages and emails can't override your system instructions (prompt injection).",
      "Vector databases and RAG sources only return documents the current user is allowed to see.",
    ],
  },
  {
    title: "Logging and Response",
    items: [
      "Prompts, tool calls and model responses are logged, with sensitive values redacted.",
      "You get an alert on unusual usage: spikes in tokens, cost or failed requests.",
      "There's a written plan for a leaked key or a misbehaving agent: who acts, and how.",
      "You can show an auditor or customer what your AI features access and why.",
    ],
  },
];

export default function AiSecurityChecklist() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-40 md:pb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4">The AI Security Checklist</h1>
              <p className="text-xl text-gray-400">
                16 checks for the places AI features most often create risk.
                Go through them with your team. Every &quot;no&quot; is
                something worth fixing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            {sections.map((section, s) => (
              <div key={section.title} className="mb-10">
                <h2 className="h3 mb-4">
                  <span className="text-[#8d8dff]">{s + 1}.</span>{" "}
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start bg-gray-800 p-4 text-lg text-gray-300"
                    >
                      <span
                        className="shrink-0 w-5 h-5 mt-1 mr-4 border-2 border-[#5D5DFF] rounded-sm"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="h2 mb-4">Too Many &quot;No&quot; Answers?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Book a free 30-minute call. We&apos;ll go through your answers
                and tell you which ones to fix first.
              </p>
              <div className="flex justify-center">
                <ScheduleButton
                  href={BOOKING_URL_AI_SECURITY}
                  label="BOOK A FREE SECURITY CALL"
                  dataCta="checklist-final"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
