export default function Map_Contact() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#DA1D3A]" />
            <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
              FIND US
            </span>
          </div>
          <h2
            className="font-display font-black text-[#0e132b] leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            OUR
            <br />
            <span className="text-[#DA1D3A]">LOCATION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#0e132b]/10">
          {/* Info cards */}
          <div className="flex flex-col">
            {[
              {
                title: "TRAINING FACILITY",
                detail: "123 Grit Avenue\nPerformance City, USA 10001",
                sub: "Main Campus",
              },
              {
                title: "OFFICE HOURS",
                detail: "Mon – Fri: 7AM – 8PM\nSat – Sun: 8AM – 4PM",
                sub: "Walk-ins welcome",
              },
              {
                title: "TRAINING HOURS",
                detail: "Mon – Sat: 6AM – 9PM\nSunday: 8AM – 2PM",
                sub: "By appointment",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-8 border-b border-[#0e132b]/10 last:border-b-0 hover:bg-[#0e132b]/5 transition-colors duration-200"
              >
                <div className="w-6 h-px bg-[#DA1D3A] mb-2" />
                <h4 className="font-display font-black text-[#0e132b] text-sm tracking-widest">
                  {item.title}
                </h4>
                <p className="font-display text-xs text-[#0e132b]/50 leading-relaxed whitespace-pre-line">
                  {item.detail}
                </p>
                <span className="font-display text-[9px] tracking-widest text-[#DA1D3A]">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Map embed — 2/3 */}
          <div className="lg:col-span-2 min-h-100 bg-[#0e132b]/5 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459253!3d40.74844097932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647891234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "400px",
                filter: "grayscale(20%)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Red corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#DA1D3A] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#DA1D3A] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
