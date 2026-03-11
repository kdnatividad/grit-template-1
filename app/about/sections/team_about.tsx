import Image from "next/image";

const team = [
  {
    name: "COACH PHIL",
    role: "HEAD COACH — 8U-10U",
    image: "/placeholders/coach1.png",
  },
  {
    name: "COACH JORDAN",
    role: "STRENGTH COACH — 12U-14U",
    image: "/placeholders/coach2.png",
  },
  {
    name: "COACH DREW",
    role: "SKILLS COACH — 16U-18U",
    image: "/placeholders/coach3.png",
  },
  {
    name: "COACH ISAIAH",
    role: "YOUTH COACH — KINDER-6U",
    image: "/placeholders/coach4.png",
  },
];

export default function Team_About() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
                THE STAFF
              </span>
            </div>
            <h2
              className="font-display font-black text-[#0e132b] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              MEET THE
              <br />
              <span className="text-[#DA1D3A]">TEAM</span>
            </h2>
          </div>
          <a
            href="/coaches"
            className="hidden md:block font-display tracking-widest text-[#DA1D3A] hover:text-[#b01730] border-b border-white/20 pb-0.5 transition-colors duration-200"
          >
            ALL COACHES ➜
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border-2 border-[#DA1D3A] cursor-pointer"
              style={{ aspectRatio: "4/5" }}
            >
              <div className="absolute inset-0 bg-[#DA1D3A]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Image
                  src="/logo/gritLogo2.webp"
                  alt="Logo"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-[9px] tracking-widest text-[#DA1D3A] mb-1">
                  {member.role}
                </p>
                <h3 className="font-display font-black text-white text-lg leading-none">
                  {member.name}
                </h3>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-white/0 group-hover:bg-white/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
