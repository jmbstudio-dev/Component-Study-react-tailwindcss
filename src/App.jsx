import { Navbar } from "@/layout/Navbar";
import { Home } from "@/sections/Home";
import { Footer } from "@/layout/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
