"use client";

import { useState } from "react";

const faqs = [
  {
    question: "HOW DO I REGISTER FOR A PROGRAM?",
    answer:
      "You can register directly through our website by clicking the Register button on any program page. You can also contact us via email or phone and our team will walk you through the process.",
  },
  {
    question: "WHAT AGE GROUPS DO YOU OFFER PROGRAMS FOR?",
    answer:
      "We offer programs for athletes from Kindergarten all the way through 18U. Each age group has tailored programming to match the appropriate intensity and skill level.",
  },
  {
    question: "DO YOU OFFER TEAM TRAINING?",
    answer:
      "Yes! We offer dedicated team programs for youth and high school teams. Contact us directly to discuss scheduling, pricing, and customization for your team.",
  },
  {
    question: "WHAT SHOULD MY ATHLETE BRING TO TRAINING?",
    answer:
      "Athletes should bring athletic shoes, comfortable training clothes, a water bottle, and a great attitude. Specific equipment requirements will be communicated upon registration.",
  },
  {
    question: "IS THERE A REFUND POLICY?",
    answer:
      "We offer full refunds up to 7 days before a program starts. After that, credits may be issued for future programs. Contact us directly for special circumstances.",
  },
  {
    question: "HOW DO I TRACK MY ATHLETE'S PROGRESS?",
    answer:
      "Every athlete receives an initial baseline assessment. Progress reports are shared at the midpoint and end of each program so you can see measurable improvement.",
  },
];

export default function Faq_Contact() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              GOT QUESTIONS?
            </span>
          </div>
          <h2
            className="font-display font-black text-[#0e132b] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            FREQUENTLY
            <br />
            <span className="text-[#DA1D3A]">ASKED</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px bg-[#0e132b]/10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#0e132b]/5 transition-colors duration-200 group"
              >
                <span className="font-display font-black text-[#0e132b] text-sm tracking-wider pr-8 group-hover:text-[#DA1D3A] transition-colors duration-200">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center border-2 transition-all duration-300 ${
                    open === i
                      ? "border-[#DA1D3A] text-[#DA1D3A] rotate-45"
                      : "border-[#0e132b]/20 text-[#0e132b]/40"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="text-[#0e132b]/50 text-sm leading-relaxed px-8 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
