"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

/* ── Inline SVG icons (lucide style, 24×24 strokeWidth=1.75) ── */

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

/* ── Card data ── */

const benefits = [
  {
    Icon: ShieldIcon,
    title: "Guaranteed Monthly Rent",
    description:
      "Your income is fixed and council-backed — not dependent on tenant behaviour or void periods.",
  },
  {
    Icon: CalendarIcon,
    title: "No Void Period Losses",
    description:
      "Empty property? You still get paid. Your rent continues uninterrupted, always.",
  },
  {
    Icon: TagIcon,
    title: "Zero Fees",
    description:
      "No tenant-finding fees, no management fees, no admin charges. Ever.",
  },
  {
    Icon: WrenchIcon,
    title: "Maintenance-Free",
    description:
      "The council handles all day-to-day repairs and tenant issues. You are not called out.",
  },
  {
    Icon: ClockIcon,
    title: "Long-Term Security",
    description:
      "Council leases run for multiple years — income stability private tenancies simply cannot match.",
  },
  {
    Icon: HeartIcon,
    title: "Social Impact",
    description:
      "Your property provides safe, stable housing for families in genuine need.",
  },
];

/* ── Component ── */

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#7B1C2E" }}
        >
          Why Landlords Choose Us
        </p>

        {/* Heading */}
        <h2
          className={`${playfair.className} text-4xl md:text-5xl font-bold mb-14`}
          style={{ color: "#1A1A1A" }}
        >
          Everything a Landlord Could Want
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ Icon, title, description }) => (
            <BenefitCard key={title} Icon={Icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  Icon,
  title,
  description,
}: {
  Icon: () => JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div
      className="group relative rounded-xl p-7 flex flex-col gap-4 transition-all duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E3DF",
        borderTop: "1px solid #E8E3DF",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 24px rgba(123,28,46,0.12)";
        el.style.borderTop = "3px solid #7B1C2E";
        el.style.paddingTop = "calc(1.75rem - 2px)"; /* compensate border growth */
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
        el.style.borderTop = "1px solid #E8E3DF";
        el.style.paddingTop = "1.75rem";
      }}
    >
      {/* Icon */}
      <div style={{ color: "#7B1C2E" }}>
        <Icon />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold leading-snug" style={{ color: "#1A1A1A" }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
        {description}
      </p>
    </div>
  );
}
