import { Navbar } from "@/layout/Navbar";
import { Test } from "@/sections/Test";
import { Footer } from "@/layout/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Test />
      </main>
      <Footer />
    </div>
  );
}

export default App;
