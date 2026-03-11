const values = [
  {
    number: "01",
    title: "GRIT OVER GLORY",
    description:
      "We believe the grind matters more than the spotlight. Every rep, every drill, every early morning builds the foundation of a champion.",
  },
  {
    number: "02",
    title: "ATHLETE FIRST",
    description:
      "Every decision we make starts with the athlete. Programs, coaching, environment — all designed around your development.",
  },
  {
    number: "03",
    title: "ELITE STANDARDS",
    description:
      "We don't settle for average and neither should you. Our coaches hold every athlete to the highest standard because that's what it takes.",
  },
  {
    number: "04",
    title: "COMMUNITY & CHARACTER",
    description:
      "Champions aren't just built in the gym. We develop leaders, teammates, and people of strong character on and off the field.",
  },
];

export default function Values_About() {
  return (
    <section className="w-full py-24 bg-[#0e132b]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              WHAT WE STAND FOR
            </span>
          </div>
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            OUR
            <br />
            <span className="text-[#DA1D3A]">VALUES</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {values.map((value, i) => (
            <div
              key={i}
              className="group bg-[#0e132b] p-10 hover:bg-[#0a0f24] transition-colors duration-300 flex gap-6"
            >
              <span className="font-display font-black text-[#DA1D3A]/40 text-5xl leading-none shrink-0 group-hover:text-[#DA1D3A]/40 transition-colors duration-300">
                {value.number}
              </span>
              <div>
                <h3 className="font-display font-black text-white text-lg tracking-wider mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
