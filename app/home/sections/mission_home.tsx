"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "500+", label: "Athletes Trained" },
  { value: "12+", label: "Programs Offered" },
  { value: "98%", label: "Athlete Satisfaction" },
];

const points = [
  "Elite 1-on-1 & group coaching sessions",
  "Science-backed performance methodology",
  "Mental toughness & leadership development",
  "Year-round programming for all skill levels",
];

export default function Mission_Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mission-visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    const els = sectionRef.current?.querySelectorAll(".mission-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .mission-animate {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .mission-visible.mission-animate {
          opacity: 1;
          transform: translateY(0);
        }
        .mission-animate:nth-child(1) { transition-delay: 0s; }
        .mission-animate:nth-child(2) { transition-delay: 0.1s; }
        .mission-animate:nth-child(3) { transition-delay: 0.2s; }
        .mission-animate:nth-child(4) { transition-delay: 0.3s; }
        .mission-animate:nth-child(5) { transition-delay: 0.4s; }

        .stat-card:hover .stat-bar {
          width: 100%;
        }
        .diagonal-slice {
          clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full relative overflow-hidden"
        style={{ backgroundColor: "#0e132b" }}
      >
        {/* Giant faded BG text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-display font-black text-white/3 whitespace-nowrap"
            style={{
              fontSize: "clamp(8rem, 20vw, 18rem)",
              letterSpacing: "-0.02em",
            }}
          >
            MISSION
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-175">
          {/* LEFT — Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-24 gap-8">
            {/* Label */}
            <div className="mission-animate flex items-center gap-3">
              <span
                className="font-display tracking-[0.4em] font-medium"
                style={{ color: "#DA1D3A" }}
              >
                OUR MISSION
              </span>
            </div>

            {/* Headline */}
            <div className="mission-animate z-50">
              <h2
                className="font-display font-black text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                WE DON'T
                <br />
                <span
                  className="relative inline-block"
                  style={{ color: "#DA1D3A" }}
                >
                  JUST TRAIN.
                  {/* Underline slash */}
                  <span
                    className="absolute -bottom-2 left-0 w-full h-0.75"
                    style={{ backgroundColor: "#DA1D3A", opacity: 0.4 }}
                  />
                </span>
                <br />
                WE FORGE
                <br />
                CHAMPIONS.
              </h2>
            </div>

            {/* Body */}
            <p className="mission-animate text-white/90 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa cum sociis natoque
              penatibus.
            </p>

            {/* Bullet points */}
            <ul className="mission-animate flex flex-col gap-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#DA1D3A" }}
                  />
                  <span className="text-white/90">{p}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div
              className="mission-animate grid grid-cols-3 gap-4 pt-6 border-t"
              style={{ borderColor: "#ffffff10" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card group">
                  <p
                    className="font-display font-black leading-none mb-1"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                      color: "#DA1D3A",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-white/40 text-[10px] tracking-widest font-display mb-2">
                    {s.label}
                  </p>
                  <div
                    className="h-0.5 w-8 stat-bar transition-all duration-500"
                    style={{ backgroundColor: "#DA1D3A" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Player image with diagonal slice */}
          <div className="relative hidden lg:flex items-end justify-center overflow-hidden">
            {/* Diagonal red block behind player */}
            <div
              className="diagonal-slice absolute inset-y-0 right-0 w-[85%]"
              style={{ backgroundColor: "#DA1D3A0D" }}
            />

            {/* Vertical red stripe accent */}
            <div
              className="absolute top-0 bottom-0 right-[15%] w-0.5"
              style={{ backgroundColor: "#DA1D3A30" }}
            />

            {/* Player */}
            <div className="relative w-full h-full">
              <Image
                src="/placeholders/player1.png"
                alt="Player"
                fill
                className="object-cover"
                style={{ objectPosition: "center 10%" }}
                priority
              />
            </div>

            {/* Left fade blending into dark bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #0e132b 0%, transparent 35%)",
              }}
            />

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #0e132b 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
