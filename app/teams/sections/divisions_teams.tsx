const divisions = [
  {
    age: "KINDER — 6U",
    label: "LITTLE GRINDERS",
    color: "bg-white",
    description:
      "Introduction to team sports and movement. Fun-first environment focused on building love for the game.",
    spots: "12 spots per team",
    focus: ["Coordination", "Fun & play", "Basic rules", "Teamwork"],
  },
  {
    age: "8U — 10U",
    label: "FUTURE ELITE",
    description:
      "Athletes begin developing real skills and competitive instincts in a supportive team environment.",
    spots: "14 spots per team",
    focus: ["Fundamentals", "Position intro", "Agility", "Competition"],
  },
  {
    age: "12U — 14U",
    label: "DEVELOPING ELITE",
    description:
      "The bridge between youth and competitive play. High-level skill development and team systems.",
    spots: "16 spots per team",
    focus: ["Team systems", "Strength intro", "Film review", "Leadership"],
  },
  {
    age: "16U — 18U",
    label: "GRIT ELITE",
    description:
      "Our flagship competitive division. Built for athletes serious about playing at the next level.",
    spots: "18 spots per team",
    focus: [
      "Elite training",
      "Recruiting support",
      "Film study",
      "College prep",
    ],
  },
];

export default function Divisions_Teams() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              HOW WE'RE STRUCTURED
            </span>
          </div>
          <h2
            className="font-display font-black text-[#0e132b] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            AGE
            <br />
            <span className="text-[#DA1D3A]">DIVISIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0e132b]/10">
          {divisions.map((div, i) => (
            <div
              key={i}
              className="group bg-white hover:bg-[#0e132b] transition-colors duration-500 p-8 flex flex-col gap-5 cursor-pointer"
            >
              {/* Number */}
              <span className="font-display font-black text-[#0e132b]/10 group-hover:text-white/10 transition-colors duration-500 leading-none text-6xl">
                0{i + 1}
              </span>

              {/* Age badge */}
              <div className="self-start bg-[#DA1D3A] px-3 py-1">
                <span className="font-display font-black text-white text-[10px] tracking-widest">
                  {div.age}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-[#0e132b] group-hover:text-white text-lg tracking-wider leading-none mb-3 transition-colors duration-500">
                  {div.label}
                </h3>
                <p className="text-[#0e132b]/50 group-hover:text-white/50 text-xs leading-relaxed transition-colors duration-500">
                  {div.description}
                </p>
              </div>

              {/* Focus areas */}
              <div className="flex flex-col gap-2 mt-auto">
                <p className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                  FOCUS AREAS
                </p>
                {div.focus.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#DA1D3A] shrink-0" />
                    <span className="font-display text-[10px] tracking-widest text-[#0e132b]/50 group-hover:text-white/50 transition-colors duration-500">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Spots */}
              <div className="border-t border-[#0e132b]/10 group-hover:border-white/10 pt-4 transition-colors duration-500">
                <span className="font-display text-[9px] tracking-widest text-[#0e132b]/30 group-hover:text-white/30 transition-colors duration-500">
                  {div.spots}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
