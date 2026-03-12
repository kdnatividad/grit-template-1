"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const points = [
  {
    title: "OUR MISSION",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    title: "OUR MISSION",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    title: "OUR MISSION",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing.",
  },
  {
    title: "OUR MISSION",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing.",
  },
];

export default function Mission_Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add("mission-triggered");
          }
        });
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
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
  .mission-triggered .mission-animate {
    opacity: 1;
    transform: translateY(0);
  }
  .mission-triggered .mission-animate:nth-child(1) { transition-delay: 0s; }
  .mission-triggered .mission-animate:nth-child(2) { transition-delay: 0.1s; }
  .mission-triggered .mission-animate:nth-child(3) { transition-delay: 0.2s; }
  .mission-triggered .mission-animate:nth-child(4) { transition-delay: 0.3s; }
  .mission-triggered .mission-animate:nth-child(5) { transition-delay: 0.4s; }
`}</style>
      <section
        ref={sectionRef}
        className="w-full relative overflow-visible"
        style={{ backgroundColor: "#0e132b" }}
      >
        <div className="max-w-350 mx-auto px-10 pt-12 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* LEFT — Content */}
            <div className="flex flex-col gap-6 py-12">
              {/* Headline */}
              <div className="mission-animate">
                <h2
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: "clamp(22px, 4vw, 40px)" }}
                >
                  OUR MISSION
                </h2>
              </div>

              {/* Body */}
              <p className="mission-animate text-white/90 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="mission-animate grid grid-cols-2 gap-6">
                {points.map((p, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ flexShrink: 0 }}
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="#DA1D3A"
                          strokeWidth="2"
                        />
                        <path
                          d="M3 9h18M9 21V9"
                          stroke="#DA1D3A"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="font-display font-black text-white text-sm tracking-widest">
                        {p.title}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Player image overflowing upward */}
            <div
              className="relative hidden lg:block"
              style={{
                height: "520px",
                marginTop: "-75px",
                overflow: "visible",
              }}
            >
              <Image
                src="/placeholders/player1v2.png"
                alt="Player"
                fill
                sizes="50vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
