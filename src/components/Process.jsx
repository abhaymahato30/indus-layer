const steps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us what you want to build. Share your concept, drawing, measurements, CAD file or simply describe your requirement.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "We analyse your requirements and develop or refine the design for functionality, accuracy and manufacturability.",
  },
  {
    number: "03",
    title: "Prototype & Validate",
    description:
      "We create a physical prototype so the design can be evaluated, tested and improved before final production.",
  },
  {
    number: "04",
    title: "Build & Deliver",
    description:
      "Once everything is approved, we manufacture the final product and deliver a solution ready for real-world use.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#05070b] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="absolute right-[-200px] top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
                OUR PROCESS
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              From concept
              <br />
              <span className="text-blue-400">to creation.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-400 lg:ml-auto sm:text-lg">
            A straightforward engineering process designed to turn your
            ideas into accurate, functional and production-ready products.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-20">

          {/* Connecting line - desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="group relative">

                {/* Number */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-[#05070b] text-sm font-bold text-blue-400 transition duration-500 group-hover:border-blue-300 group-hover:bg-blue-400 group-hover:text-[#06101d] group-hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-6 text-sm text-gray-700 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-blue-400/10 bg-gradient-to-r from-blue-500/[0.08] to-transparent p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-blue-400">
                BUILT AROUND YOUR REQUIREMENTS
              </div>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                Don't have a finished design?
                <span className="text-gray-400">
                  {" "}That's okay.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                You can start with an idea, sketch or reference. We'll help
                turn it into something that can actually be built.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-xl border border-blue-400/30 bg-blue-400/10 px-6 py-3.5 text-sm font-bold text-blue-300 transition hover:bg-blue-400 hover:text-[#06101d]"
            >
              Start With an Idea →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;