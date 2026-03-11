const stats = [
  { value: "500+", label: "Athletes Trained" },
  { value: "12+", label: "Programs Offered" },
  { value: "98%", label: "Athlete Satisfaction" },
  { value: "10+", label: "Years of Excellence" },
];

export default function Stats_About() {
  return (
    <section className="w-full border-y border-white/10 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p
              className="font-display font-black text-[#DA1D3A] leading-none mb-2"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {stat.value}
            </p>
            <div className="w-12 h-0.75 bg-[#DA1D3A]/40 mb-2" />
            <p className="font-display text-xs tracking-widest text-black/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
