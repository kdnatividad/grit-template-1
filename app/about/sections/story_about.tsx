import Image from "next/image";

export default function Story_About() {
  return (
    <section className="w-full py-24 bg-[#0e132b]">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-125 overflow-hidden">
          <Image
            src="/placeholders/player1.png"
            alt="Our Story"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0e132b]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-[#DA1D3A] px-6 py-4">
            <p className="font-display font-black text-white text-3xl leading-none">
              10+
            </p>
            <p className="font-display text-white/80 text-xs tracking-widest mt-1">
              YEARS OF EXCELLENCE
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              OUR STORY
            </span>
          </div>
          <h2
            className="font-display font-black text-white leading-none"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            MORE THAN
            <br />A TRAINING
            <br />
            <span className="text-[#DA1D3A]">PROGRAM.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
          <div className="w-full h-px bg-white/10 my-2" />
          <p className="text-white/30 text-xs font-display tracking-widest italic">
            "We don't just train athletes. We forge champions."
          </p>
        </div>
      </div>
    </section>
  );
}
