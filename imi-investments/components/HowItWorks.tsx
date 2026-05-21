"use client";

import{ Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const steps = [
  {
    number: 1,
    title: "You Contact Us",
    copy: "Tell us about your property. No obligation, no hard sell — just a straightforward conversation.",
  },
  {
    number: 2,
    title: "We Agree Terms",
    copy: "We assess your property and agree a fixed monthly rent with you before anything is signed.",
  },
  {
    number: 3,
    title: "Council Takes Over",
    copy: "We lease your property to the local council. They place tenants and handle all maintenance.",
  },
  {
    number: 4,
    title: "Rent Lands Monthly",
    copy: "Your guaranteed rent arrives every month — whether the property is occupied or not.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ backgroundColor: "#f7f5f0" }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#b8924a" }}
        >
          The Process
        </p>

        {/* Heading */}
        <h2
          className={`${playfair.className} text-4xl md:text-5xl font-bold mb-16`}
          style={{ color: "#1a1a1a" }}
        >
          Simple. Transparent. Stress-Free.
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-7 left-0 right-0 h-px"
            style={{ backgroundColor: "#b8924a", opacity: 0.3 }}
            aria-hidden="true"
          />

          <ol className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0 md:justify-between relative">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col items-start md:items-center md:text-center md:flex-1 md:px-6 relative"
              >
                {/* Numbered circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0 relative z-10 mb-5"
                  style={{ backgroundColor: "#b8924a" }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#1a1a1a" }}
                >
                  {step.title}
                </h3>

                {/* Copy */}
                <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
