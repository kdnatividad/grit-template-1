export default function Hero_About() {
  return (
    <section className="relative w-full h-[60vh] min-h-100 overflow-hidden flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholders/offer1.png')" }}
      />
      <div className="absolute inset-0 bg-[#0e132b]/75" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0e132b] via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#DA1D3A]" />
          <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
            WHO WE ARE
          </span>
        </div>
        <h1
          className="font-display font-black text-white leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          BUILT ON
          <br />
          <span className="text-[#DA1D3A]">GRIT.</span>
        </h1>
      </div>
    </section>
  );
}
