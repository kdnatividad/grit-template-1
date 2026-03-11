export default function Cta_Teams() {
  return (
    <section className="w-full bg-[#DA1D3A] py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2
          className="font-display font-black text-white leading-none text-center md:text-left"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          READY TO JOIN
          <br />A TEAM?
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/register"
            className="font-display font-black text-sm tracking-widest text-[#DA1D3A] bg-white px-10 py-4 hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            REGISTER NOW
          </a>
          <a
            href="/contact"
            className="font-display font-black text-sm tracking-widest text-white border-2 border-white/60 px-10 py-4 hover:border-white transition-colors duration-200 shrink-0"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
 