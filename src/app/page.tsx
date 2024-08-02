import Hero, { About, Resume, Portfolio, Contact } from "./components/content";
import { Footer } from "./components/footer";

import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="bg-[#151517] ">
      <div className="max-w-7xl w-full  mx-auto ">
        <Navigation />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
