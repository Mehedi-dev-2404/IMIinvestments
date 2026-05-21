'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

const MAROON = '#7B1C2E'
const FORMSPREE_URL = 'https://formspree.io/f/YOURFORMID'

type FormValues = {
  fullName: string
  phone: string
  email: string
  postcode?: string
  message?: string
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12 19.79 19.79 0 0 1 1.13 3.39 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.704a.75.75 0 0 0 .921.921l5.863-1.481A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 0 1-4.944-1.35l-.354-.211-3.664.926.944-3.647-.23-.374A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  async function onSubmit(data: FormValues) {
    setServerError(false)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setServerError(true)
      }
    } catch {
      setServerError(true)
    }
  }

  const inputClass =
    'w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition'

  return (
    <section
      id="contact"
      className={`${playfair.variable} ${dmSans.variable}`}
      style={{ backgroundColor: MAROON, fontFamily: 'var(--font-dm-sans)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left column ── */}
          <div className="text-white">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Get in Touch
            </p>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ready to Talk? Let&apos;s See If Your Property Qualifies.
            </h2>

            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.8)' }}>
              No obligation and no hard sell — just a straightforward conversation about your property.
            </p>

            <ul className="space-y-5" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <li>
                <a href="tel:+440000000000" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <PhoneIcon />
                  <span>Call us: <span className="font-semibold">07700 000 000</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@imiinvestments.co.uk" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <EmailIcon />
                  <span className="font-semibold">info@imiinvestments.co.uk</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <WhatsAppIcon />
                  <span>WhatsApp us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ── Right column — form card ── */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${MAROON}15` }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={MAROON} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Thanks! We&apos;ll be in touch shortly.
                </h3>
                <p className="text-sm text-gray-500">We aim to respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <h3
                  className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'var(--font-playfair)', color: MAROON }}
                >
                  Send us an Enquiry
                </h3>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className={inputClass}
                    style={{ focusRingColor: MAROON } as React.CSSProperties}
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="07700 900 000"
                      className={inputClass}
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className={inputClass}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Property Postcode */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Property Postcode <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SW1A 1AA"
                    className={inputClass}
                    {...register('postcode')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                    Message <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a bit about your property or any questions you have…"
                    className={`${inputClass} resize-none`}
                    {...register('message')}
                  />
                </div>

                {serverError && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again or contact us directly.</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md text-white font-semibold text-sm tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: MAROON, outlineColor: MAROON }}
                >
                  {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
