import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Contacts } from "@/sections/Contacts";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Creatives } from "@/sections/Creatives";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "./layout/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        {/* <Creatives /> */}
        {/* <Testimonials /> */}
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
