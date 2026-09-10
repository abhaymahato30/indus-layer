function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#070a10] py-24 sm:py-32">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-xs font-bold tracking-[0.2em] text-blue-300">
            LET'S BUILD SOMETHING
          </span>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Have an idea?
          <br />
          <span className="text-blue-400">Let's build it.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          Whether you have a finished CAD design, a rough sketch or just
          an idea, let's turn it into something real.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-blue-400 px-7 py-4 text-sm font-bold text-[#06101d] transition hover:bg-blue-300 hover:shadow-[0_0_35px_rgba(96,165,250,0.25)]"
          >
            Start Your Project →
          </a>

          <a
            href="tel:+919355570559"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
          >
            Call Us
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;