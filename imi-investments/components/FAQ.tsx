"use client";

import { useState, useRef } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const faqs = [
  {
    question: "Is my rent truly guaranteed even if there is no tenant?",
    answer:
      "Yes. Once your agreement is in place, your monthly rent is paid regardless of occupancy. This is one of the core advantages of the scheme.",
  },
  {
    question: "Who deals with repairs and maintenance?",
    answer:
      "The council takes on responsibility for day-to-day maintenance. You are not called out and you do not pay for repairs.",
  },
  {
    question: "Do I pay any fees?",
    answer:
      "No. IMIinvestments does not charge landlords any fees — no tenant-finding, no management, no admin. No hidden charges.",
  },
  {
    question: "Who are the tenants?",
    answer:
      "Tenants are placed by the local council — typically individuals or families in social housing need. The council vets and manages the tenancy.",
  },
  {
    question: "How long are the agreements?",
    answer:
      "Agreements are typically multi-year, giving you income stability that short-term private tenancies cannot offer.",
  },
  {
    question: "What types of properties do you accept?",
    answer:
      "We work with a range of residential properties. Get in touch to find out if yours qualifies — no obligation.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-gray-900">{question}</span>
        {/* Chevron */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#7B1C2E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Animated answer */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 400}px`
            : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" style={{ backgroundColor: "#F4F1EE" }} className="py-20 px-6">
      <div className="max-w-[780px] mx-auto">
        {/* Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#7B1C2E" }}
        >
          Common Questions
        </p>

        {/* Heading */}
        <h2
          className={`${playfair.className} text-4xl md:text-5xl font-bold mb-12`}
          style={{ color: "#1a1a1a" }}
        >
          Everything You Need to Know
        </h2>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
