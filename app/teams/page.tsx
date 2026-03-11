import Cta_Teams from "./sections/cta_teams";
import Divisions_Teams from "./sections/divisions_teams";
import Grid_Teams from "./sections/grid_teams";
import Hero_Teams from "./sections/hero_teams";

export default function TeamsPage() {
  return (
    <main className="bg-[#0e132b]">
      <Hero_Teams />
      <Grid_Teams />
      <Divisions_Teams />
      <Cta_Teams />
    </main>
  );
}
