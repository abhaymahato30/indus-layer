import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;