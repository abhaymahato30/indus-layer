import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Navbar />

      <main
        id="home"
        className="flex min-h-screen items-center justify-center pt-20"
      >
        <div className="text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#55aaff]">
            3D PRINTING • ENGINEERING • MANUFACTURING
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            INDUS<span className="text-[#55aaff]">LAYER</span>
          </h1>

          <p className="mt-6 text-gray-400">
            Engineering Ideas for a Better Tomorrow
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;