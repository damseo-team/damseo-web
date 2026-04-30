import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Concept } from "./components/concept";
import { Features } from "./components/features";
import { ContactCta } from "./components/contact-cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Features />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
