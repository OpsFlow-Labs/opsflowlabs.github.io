"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CHECKLIST_URL,
  FORMSPREE_FORM_ID,
  X_CHECKLIST_PIXEL_ID,
} from "@/config/checklist";

type Status = "idle" | "sending" | "error";

// Email signup for the free AI Security Checklist. Sends the email to
// Formspree, reports the signup to X Ads, then opens the checklist page.
export default function ChecklistSignup({ source }: { source: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source,
          _subject: "New AI Security Checklist signup",
        }),
      });
      if (!res.ok) throw new Error(`Formspree returned ${res.status}`);
    } catch {
      setStatus("error");
      return;
    }

    window.twttr?.conversion?.trackPid(X_CHECKLIST_PIXEL_ID, {
      tw_sale_amount: 0,
      tw_order_quantity: 0,
    });
    router.push(CHECKLIST_URL);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Not Ready for a Call?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get our free AI Security Checklist: 16 checks for API keys, data,
              agents and logging that you can run with your team this week.
            </p>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-[#5D5DFF] rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                placeholder="Your work email"
                aria-label="Your work email"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn text-white bg-[#5D5DFF] hover:bg-[#4a4ae6] whitespace-nowrap disabled:opacity-60"
                data-cta={`checklist-${source}`}
              >
                {status === "sending" ? "Sending…" : "Get the Checklist"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-red-400 mt-3">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-sm text-gray-500 mt-3">
              No spam. One follow-up email at most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
