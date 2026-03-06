import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Creatives } from "@/sections/Creatives";
import { Footer } from "@/layout/Footer";
import { Draft } from "./sections/Draft";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contacts />
        {/* <Creatives /> */}
        {/* <Draft /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
