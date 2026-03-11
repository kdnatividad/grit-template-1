"use client";

const news = [
  {
    id: 1,
    tag: "ANNOUNCEMENT",
    date: "MAR 5, 2026",
    title: "GRIT OPENS NEW STATE-OF-THE-ART TRAINING FACILITY",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    image: "/placeholders/offer1.png",
  },
  {
    id: 2,
    tag: "PROGRAM",
    date: "FEB 28, 2026",
    title: "SPRING SPEED CAMP NOW OPEN FOR REGISTRATION",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/placeholders/offer2.jpg",
  },
  {
    id: 3,
    tag: "ATHLETE",
    date: "FEB 20, 2026",
    title: "ALUMNI SPOTLIGHT: FROM GRIT TO THE PROS",
    excerpt: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/placeholders/offer3.jpg",
  },
  {
    id: 4,
    tag: "TRAINING",
    date: "FEB 10, 2026",
    title: "WHY MENTAL REPS ARE AS IMPORTANT AS PHYSICAL ONES",
    image: "/placeholders/offer4.jpg",
  },
  {
    id: 5,
    tag: "MERCH",
    date: "JAN 30, 2026",
    title: "NEW GRIT COLLECTION DROP — LIMITED UNITS",
    image: "/placeholders/offer1.png",
  },
];

export default function News_Home() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display text-xs tracking-[0.4em] font-medium text-[#DA1D3A]">
                LATEST NEWS
              </span>
            </div>
            <h2 className="font-display font-black leading-none text-[#0e132b] text-4xl lg:text-6xl">
              STAY IN
              <br />
              THE LOOP
            </h2>
          </div>

          <a
            href="/news"
            className="hidden md:flex items-center gap-2 font-display text-xs tracking-widest font-bold border-b-2 border-[#DA1D3A] pb-1 text-[#0e132b] hover:opacity-70 transition-opacity"
          >
            ALL NEWS{" "}
            <span className="translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
              →
            </span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[260px_260px] gap-3">
          {/* LARGE card — 7 cols, spans 2 rows */}
          <div className="group relative overflow-hidden md:col-span-7 md:row-span-2 h-130 md:h-auto cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${news[0].image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/95 via-[#0e132b]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-[10px] tracking-widest px-3 py-1 text-white bg-[#0e132b] border border-[#DA1D3A]/30 group-hover:bg-[#DA1D3A] transition-colors duration-300">
                  {news[0].tag}
                </span>
                <span className="text-white/90 font-display text-[10px] tracking-widest">
                  {news[0].date}
                </span>
              </div>
              <h3 className="font-display font-black text-white leading-none mb-3 text-2xl lg:text-4xl">
                {news[0].title}
              </h3>
              <p className="text-white/90 text-xs leading-relaxed max-w-md mb-4">
                {news[0].excerpt}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-display text-xs tracking-widest font-bold text-[#DA1D3A]">
                  READ MORE
                </span>
                <span className="font-display text-xs text-[#DA1D3A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* MEDIUM card 1 — 5 cols, row 1 */}
          <div className="group relative overflow-hidden md:col-span-5 md:row-span-1 h-65 md:h-auto cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${news[1].image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/95 via-[#0e132b]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-display text-[9px] tracking-widest px-2 py-0.5 text-white bg-[#0e132b] border border-[#DA1D3A]/30 group-hover:bg-[#DA1D3A] transition-colors duration-300">
                  {news[1].tag}
                </span>
                <span className="text-white/90 font-display text-[9px] tracking-widest">
                  {news[1].date}
                </span>
              </div>
              <h3 className="font-display font-black text-white leading-none mb-2 text-lg">
                {news[1].title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="font-display text-[10px] tracking-widest font-bold text-[#DA1D3A]">
                  READ MORE
                </span>
                <span className="font-display text-[10px] text-[#DA1D3A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* MEDIUM card 2 — 5 cols, row 2 */}
          <div className="group relative overflow-hidden md:col-span-5 md:row-span-1 h-65 md:h-auto cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${news[2].image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/95 via-[#0e132b]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-display text-[9px] tracking-widest px-2 py-0.5 text-white bg-[#0e132b] border border-[#DA1D3A]/30 group-hover:bg-[#DA1D3A] transition-colors duration-300">
                  {news[2].tag}
                </span>
                <span className="text-white/90 font-display text-[9px] tracking-widest">
                  {news[2].date}
                </span>
              </div>
              <h3 className="font-display font-black text-white leading-none mb-2 text-lg">
                {news[2].title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="font-display text-[10px] tracking-widest font-bold text-[#DA1D3A]">
                  READ MORE
                </span>
                <span className="font-display text-[10px] text-[#DA1D3A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* SMALL cards — 6 cols each, row 3 */}
          {news.slice(3).map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden md:col-span-6 h-70 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#0e132b]/95 via-[#0e132b]/60 to-[#0e132b]/30" />
              <div className="absolute inset-0 bg-[#DA1D3A]/0 group-hover:bg-[#DA1D3A]/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center px-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-[9px] tracking-widest px-2 py-0.5 text-white bg-[#0e132b] border border-[#DA1D3A]/30 group-hover:bg-[#DA1D3A] transition-colors duration-300">
                    {item.tag}
                  </span>
                  <span className="text-white/90 font-display text-[9px] tracking-widest">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display font-black text-white leading-none mb-2 text-base lg:text-lg">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-display text-[10px] tracking-widest font-bold text-[#DA1D3A]">
                    READ MORE
                  </span>
                  <span className="font-display text-[10px] text-[#DA1D3A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ticker */}
        <div className="mt-10 py-2 overflow-hidden border-y bg-[#0e132b]">
          <div className="flex gap-12 animate-[ticker_20s_linear_infinite] whitespace-nowrap w-max">
            {Array(16)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  className={`font-display font-black text-3xl italic tracking-wider shrink-0 ${i % 2 === 0 ? "text-[#DA1D3A]" : "text-[#DA1D3A]"}`}
                >
                  BUILT BY GRIT
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
