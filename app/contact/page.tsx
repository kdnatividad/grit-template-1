import Faq_Contact from "./sections/faq_contact";
import Form_Contact from "./sections/form_contact";
import Hero_Contact from "./sections/hero_contact";
import Map_Contact from "./sections/map_contact";
import Social_Contact from "./sections/social_contact";

export default function ContactPage() {
  return (
    <main className="bg-[#0e132b]">
      <Hero_Contact />
      <Form_Contact />
      <Map_Contact />
      <Social_Contact />
      <Faq_Contact />
    </main>
  );
}
