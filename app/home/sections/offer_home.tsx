"use client";

const offers = [
  {
    title: "SPEED & AGILITY",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer1.png",
  },
  {
    title: "STRENGTH TRAINING",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer2.jpg",
  },
  {
    title: "MENTAL STRENGTH",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer3.jpg",
  },
  {
    title: "TEAM PROGRAMS",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "/placeholders/offer4.jpg",
  },
];

export default function Offer_Home() {
  return (
    <section
      className="w-full py-12 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p
            className="text-lg tracking-[0.3em] font-display font-medium mb-3 text-[#0e132b]"
          >
            WHAT WE OFFER
          </p>
          <h2
            className="font-display font-black text-[#DA1D3A] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            BUILT FOR
            <br />
            CHAMPIONS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
              style={{ height: "360px" }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${offer.image})` }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 bg-black/60"
              />

              {/* Red accent line */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.75 transition-all duration-500"
                style={{ backgroundColor: "#DA1D3A" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3
                  className="font-display font-black text-white leading-none mb-3"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  {offer.title}
                </h3>
                <p className="text-white/90 text-xs leading-relaxed">
                  {offer.description}
                </p>

                <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                  <a
                    href="/programs"
                    className="font-display text-xs tracking-widest font-bold"
                    style={{ color: "#DA1D3A" }}
                  >
                    LEARN MORE →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
