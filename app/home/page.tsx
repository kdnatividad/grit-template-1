import Coaches_Home from "./sections/coaches_home";
import Hero_Home from "./sections/hero_home";
import Mission_Home from "./sections/mission_home";
import News_Home from "./sections/news_home";
import Offer_Home from "./sections/offer_home";

export default function Home() {
  return (
    <main>
      <Hero_Home />
      <Offer_Home />
      <Mission_Home />
      <News_Home />
      <Coaches_Home />
    </main>
  );
}
