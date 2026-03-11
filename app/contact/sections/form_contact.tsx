"use client";

import { useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const subjects = [
    "General Inquiry",
    "Program Registration",
    "Team Programs",
    "Merch Order",
    "Media & Press",
    "Other",
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left — Info */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
                CONTACT US
              </span>
            </div>
            <h2
              className="font-display font-black text-[#0e132b] leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              WE'D LOVE
              <br />
              TO HEAR
              <br />
              <span className="text-[#DA1D3A]">FROM YOU.</span>
            </h2>
          </div>

          <p className="text-[#0e132b]/50 text-sm leading-relaxed">
            Whether you have questions about our programs, want to register your
            athlete, or just want to connect — our team is ready to help.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {[
              {
                label: "EMAIL",
                value: "info@gritperformance.com",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                label: "PHONE",
                value: "+1 (555) 000-0000",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
              {
                label: "LOCATION",
                value: "123 Grit Ave, Performance City, USA",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-[#DA1D3A]/40 text-[#DA1D3A]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30 mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-xs tracking-wide text-[#0e132b]/70">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-8 bg-[#f8f8f8] p-10 border border-[#0e132b]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-[#0e132b]/40">
                FULL NAME *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="bg-white border border-[#0e132b]/10 text-[#0e132b] text-sm px-4 py-3 font-display tracking-wide placeholder:text-[#0e132b]/20 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-[#0e132b]/40">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@email.com"
                className="bg-white border border-[#0e132b]/10 text-[#0e132b] text-sm px-4 py-3 font-display tracking-wide placeholder:text-[#0e132b]/20 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-[#0e132b]/40">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
                className="bg-white border border-[#0e132b]/10 text-[#0e132b] text-sm px-4 py-3 font-display tracking-wide placeholder:text-[#0e132b]/20 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-[#0e132b]/40">
                SUBJECT *
              </label>
              <select
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="bg-white border border-[#0e132b]/10 text-[#0e132b]/70 text-sm px-4 py-3 font-display tracking-wide focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200 cursor-pointer"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="font-display text-[9px] tracking-widest text-[#0e132b]/40">
                MESSAGE *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us how we can help..."
                rows={5}
                className="bg-white border border-[#0e132b]/10 text-[#0e132b] text-sm px-4 py-3 font-display tracking-wide placeholder:text-[#0e132b]/20 focus:outline-none focus:border-[#DA1D3A] transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="button"
                className="w-full font-display font-black text-sm tracking-widest text-white bg-[#DA1D3A] px-8 py-4 hover:bg-[#b01730] transition-colors duration-200"
              >
                SEND MESSAGE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
