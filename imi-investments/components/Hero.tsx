"use client";

import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const NAVY = '#1a2942'
const GOLD = '#b8924a'

const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M0 48L48 0M-12 12L12 -12M36 60L60 36' stroke='%231a2942' stroke-width='0.6' opacity='0.05'/%3E%3C/svg%3E")`

const badges = [
  {
    label: 'Guaranteed Rent',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'No Hidden Fees',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: 'Council-Backed',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade {
          animation: heroFadeIn 0.8s ease both;
        }
        .hero-fade-1 { animation-delay: 0.05s; }
        .hero-fade-2 { animation-delay: 0.2s; }
        .hero-fade-3 { animation-delay: 0.35s; }
        .hero-fade-4 { animation-delay: 0.5s; }
        html { scroll-behavior: smooth; }
      `}</style>

      <section
        className={`${playfair.variable} ${dmSans.variable} relative pt-16 pb-12 overflow-hidden`}
        style={{ backgroundImage: bgPattern, backgroundSize: '48px 48px', backgroundColor: '#ffffff', minHeight: '600px' }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-start text-center">

          {/* Headline */}
          <h1
            className="hero-fade hero-fade-1 text-6xl md:text-8xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: NAVY }}
          >
            Guaranteed Rent.{' '}
            <span style={{ color: GOLD }}>Zero Hassle.</span>
            {' '}Backed by the Council.
          </h1>

          {/* Sub-headline */}
          <p
            className="hero-fade hero-fade-2 mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            IMIinvestments partners with private landlords to provide secure, long-term
            social housing — giving you reliable monthly rent with all the stress taken
            care of.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-fade hero-fade-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <a
              href="#contact"
              className="inline-block px-10 py-5 rounded-md text-white font-semibold text-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: GOLD, outlineColor: GOLD }}
            >
              See If Your Property Qualifies
            </a>
            <a
              href="#how-it-works"
              className="inline-block px-10 py-5 rounded-md font-semibold text-lg border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: NAVY, borderColor: NAVY, outlineColor: NAVY }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${NAVY}10`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
              }}
            >
              How It Works
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="hero-fade hero-fade-4 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            {badges.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2">
                {icon}
                <span className="text-base font-semibold" style={{ color: NAVY }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
