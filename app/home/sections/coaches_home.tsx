"use client";

import Image from "next/image";

const coaches = [
  {
    id: 1,
    name: "COACH PHIL",
    level: "8U - 10U",
    image: "/placeholders/coach1.png",
  },
  {
    id: 2,
    name: "COACH JORDAN",
    level: "12U - 14U",
    image: "/placeholders/coach2.png",
  },
  {
    id: 3,
    name: "COACH DREW",
    level: "16U - 18U",
    image: "/placeholders/coach3.png",
  },
  {
    id: 4,
    name: "COACH ISAIAH",
    level: "KINDER - 6U",
    image: "/placeholders/coach4.png",
  },
];

export default function Coaches_Home() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-black text-[#0e132b] text-4xl lg:text-5xl leading-none">
              OUR COACHES
            </h2>
            <div className="w-12 h-0.75 bg-[#DA1D3A] mt-3" />
          </div>

          <a
            href="/coaches"
            className="font-display text-xs tracking-widest font-bold text-white bg-[#DA1D3A] px-6 py-3 hover:bg-[#ff2a4a] transition-colors duration-200"
          >
            VIEW MORE
          </a>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative overflow-hidden cursor-pointer border-2 border-[#DA1D3A]"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Red background */}
              <div className="absolute inset-0 bg-[#DA1D3A]" />

              {/* White logo behind coach */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo/logoWhite.png"
                  alt="Logo"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Coach image */}
              <div className="absolute inset-0">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/90 via-[#0e132b]/20 to-transparent" />

              {/* Blue left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-white/20 group-hover:bg-white/60 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-[10px] tracking-widest text-[#DA1D3A] mb-1">
                  {coach.level}
                </p>
                <h3 className="font-display font-black text-white text-lg lg:text-2xl leading-none">
                  {coach.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
