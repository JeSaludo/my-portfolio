import Hero, { About } from "./components/content";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="bg-[#151517] h-full">
      <div className="max-w-7xl w-full  mx-auto ">
        <Navigation />
        <Hero />
        <About />
      </div>
    </main>
  );
}
