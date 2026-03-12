"use client";

import { useState } from "react";
import Image from "next/image";

const teams = [
  {
    name: "GRIT ELITE 18U",
    division: "18U",
    season: "SPRING 2026",
    record: "12 — 3",
    players: 18,
    coach: "COACH DREW",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach3.png",
  },
  {
    name: "GRIT ELITE 16U",
    division: "16U",
    season: "SPRING 2026",
    record: "9 — 4",
    players: 16,
    coach: "COACH JORDAN",
    status: "ACTIVE",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach2.png",
  },
  {
    name: "GRIT ELITE 14U",
    division: "14U",
    season: "SPRING 2026",
    record: "11 — 2",
    players: 15,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer3.jpg",
    coachImage: "/placeholders/coach1.png",
  },
  {
    name: "GRIT ELITE 12U",
    division: "12U",
    season: "SPRING 2026",
    record: "8 — 5",
    players: 14,
    coach: "COACH ISAIAH",
    status: "ACTIVE",
    image: "/placeholders/offer4.jpg",
    coachImage: "/placeholders/coach4.png",
  },
  {
    name: "GRIT FUTURE 10U",
    division: "10U",
    season: "SPRING 2026",
    record: "7 — 3",
    players: 12,
    coach: "COACH PHIL",
    status: "ACTIVE",
    image: "/placeholders/offer1.png",
    coachImage: "/placeholders/coach1.png",
  },
  {
    name: "GRIT FUTURE 8U",
    division: "8U",
    season: "SPRING 2026",
    record: "6 — 4",
    players: 12,
    coach: "COACH ISAIAH",
    status: "RECRUITING",
    image: "/placeholders/offer2.jpg",
    coachImage: "/placeholders/coach4.png",
  },
];

const filters = ["ALL", "18U", "16U", "14U", "12U", "10U", "8U"];

export default function GridTeams() {
  const [active, setActive] = useState("ALL");
  const filtered =
    active === "ALL" ? teams : teams.filter((t) => t.division === active);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#DA1D3A]" />
              <span className="font-display tracking-[0.4em] text-[#DA1D3A]">
                ALL TEAMS
              </span>
            </div>
            <h2
              className="font-display font-black text-[#0e132b] leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              FIND YOUR
              <br />
              <span className="text-[#DA1D3A]">TEAM</span>
            </h2>
          </div>

          {/* test push */}

          {/* Filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-display text-[10px] tracking-widest px-4 py-2 border transition-all duration-200 ${
                  active === f
                    ? "bg-[#DA1D3A] border-[#DA1D3A] text-white"
                    : "border-[#0e132b]/20 text-[#0e132b]/40 hover:border-[#DA1D3A]/60 hover:text-[#0e132b]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Teams list */}
        <div className="flex flex-col gap-3">
          {filtered.map((team, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 lg:grid-cols-12 border border-[#0e132b]/10 hover:border-[#DA1D3A]/40 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image col */}
              <div className="relative lg:col-span-3 h-50 lg:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${team.image})` }}
                />
                <div className="absolute inset-0 bg-[#0e132b]/40 group-hover:bg-[#0e132b]/20 transition-colors duration-300" />

                {/* Division badge */}
                <div className="absolute top-4 left-4 bg-[#DA1D3A] px-3 py-1">
                  <span className="font-display font-black text-white text-xs tracking-widest">
                    {team.division}
                  </span>
                </div>

                {/* Status badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 ${
                    team.status === "RECRUITING"
                      ? "bg-white"
                      : "bg-white/10 border border-white/20"
                  }`}
                >
                  <span
                    className={`font-display text-[9px] tracking-widest font-bold ${
                      team.status === "RECRUITING"
                        ? "text-[#DA1D3A]"
                        : "text-white/60"
                    }`}
                  >
                    {team.status}
                  </span>
                </div>
              </div>

              {/* Team name + season */}
              <div className="lg:col-span-4 flex flex-col justify-center px-8 py-6 border-t lg:border-t-0 lg:border-l border-[#0e132b]/10">
                <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30 mb-2">
                  {team.season}
                </p>
                <h3 className="font-display font-black text-[#0e132b] text-xl lg:text-2xl leading-none mb-3 group-hover:text-[#DA1D3A] transition-colors duration-300">
                  {team.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DA1D3A]" />
                  <span className="font-display text-[10px] tracking-widest text-[#0e132b]/40">
                    {team.players} ATHLETES ROSTERED
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="lg:col-span-3 flex items-center px-8 py-6 border-t lg:border-t-0 lg:border-l border-[#0e132b]/10 gap-8">
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30 mb-1">
                    RECORD
                  </p>
                  <p className="font-display font-black text-[#0e132b] text-2xl leading-none">
                    {team.record}
                  </p>
                </div>
                <div className="w-px h-10 bg-[#0e132b]/10" />
                <div>
                  <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30 mb-1">
                    DIVISION
                  </p>
                  <p className="font-display font-black text-[#DA1D3A] text-2xl leading-none">
                    {team.division}
                  </p>
                </div>
              </div>

              {/* Coach */}
              <div className="lg:col-span-2 flex items-center justify-between lg:justify-center px-8 py-6 border-t lg:border-t-0 lg:border-l border-[#0e132b]/10 gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#DA1D3A]/40">
                    <Image
                      src={team.coachImage}
                      alt={team.coach}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[9px] tracking-widest text-[#0e132b]/30">
                      COACH
                    </p>
                    <p className="font-display font-black text-[#0e132b] text-xs tracking-wider">
                      {team.coach}
                    </p>
                  </div>
                </div>
                <span className="font-display text-xs text-[#0e132b]/20 group-hover:text-[#DA1D3A] transition-colors duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
