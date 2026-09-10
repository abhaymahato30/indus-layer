function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05070b] pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Blue glow */}
      <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-blue-300">
                3D PRINTING • ENGINEERING • MANUFACTURING
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Engineering Ideas
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                for a Better Tomorrow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              We transform ideas into precision-engineered products,
              prototypes and custom solutions using modern 3D printing
              and manufacturing technologies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-400 px-6 py-3.5 text-sm font-bold text-[#06101d] transition duration-300 hover:bg-blue-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]"
              >
                Start Your Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="mt-1 text-xs text-gray-500">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="mt-1 text-xs text-gray-500">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-white">7</div>
                <div className="mt-1 text-xs text-gray-500">
                  Core Services
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative mx-auto flex h-[520px] w-full max-w-xl items-center justify-center">

            {/* Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

            {/* Main visual card */}
            <div className="relative z-10 h-[400px] w-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:h-[440px] sm:w-[340px]">

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-blue-400/20" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-blue-400/10" />

              {/* Fake 3D engineering object */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-48 w-48 rotate-12 rounded-[35px] border border-blue-300/30 bg-gradient-to-br from-blue-300/20 via-blue-500/10 to-transparent shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-blue-300/20">
                    <div className="h-full w-full rounded-full border-2 border-dashed border-blue-300/40" />
                  </div>

                  <div className="absolute -left-6 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-400/10" />

                  <div className="absolute -right-6 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-400/10" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 p-6 backdrop-blur-md">
                <div className="text-[10px] font-bold tracking-[0.25em] text-blue-300">
                  PRECISION ENGINEERING
                </div>

                <div className="mt-1 text-xl font-bold text-white">
                  Built to Perform.
                </div>
              </div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute left-0 top-16 z-20 rounded-xl border border-white/10 bg-[#0b1018]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="text-[10px] font-bold tracking-widest text-blue-400">
                01
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Design
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute bottom-16 right-0 z-20 rounded-xl border border-white/10 bg-[#0b1018]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="text-[10px] font-bold tracking-widest text-blue-400">
                02
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Prototype
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;