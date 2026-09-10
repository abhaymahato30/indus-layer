const services = [
  {
    number: "01",
    title: "3D Printing & Prototyping",
    description:
      "Turn your concepts into accurate physical prototypes and functional parts with modern 3D printing.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Engineering Parts & Models",
    description:
      "Precision-engineered components and custom models designed around your technical requirements.",
    icon: "⚙",
  },
  {
    number: "03",
    title: "Custom Mould Design",
    description:
      "Practical mould design solutions for manufacturing, casting and production applications.",
    icon: "⬡",
  },
  {
    number: "04",
    title: "Core & Cavity for Casting",
    description:
      "Design and development of core and cavity systems for reliable casting applications.",
    icon: "◇",
  },
  {
    number: "05",
    title: "Human Statues",
    description:
      "Custom-designed and 3D printed human figures, statues and detailed decorative models.",
    icon: "♙",
  },
  {
    number: "06",
    title: "Decorative Lights & Lamps",
    description:
      "Unique custom lighting products combining functional design with modern 3D printing.",
    icon: "◉",
  },
  {
    number: "07",
    title: "Custom Unique Gifts",
    description:
      "Personalized and creative 3D printed products designed to make every occasion special.",
    icon: "✦",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#070a10] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="absolute left-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />

            <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From idea to
            <span className="text-blue-400"> reality.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From precision engineering components to custom 3D printed
            products, we build solutions that turn your ideas into
            something real.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.04] ${
                index === 0
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
                  {service.number}
                </span>

                <span className="text-2xl text-gray-600 transition duration-500 group-hover:scale-110 group-hover:text-blue-400">
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <div className="mt-16">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-7 flex items-center gap-2 text-xs font-bold text-gray-600 transition group-hover:text-blue-400">
                <span>LEARN MORE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Have something specific in mind?
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Tell us about your project and we'll help you find the right
              solution.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-blue-400 px-6 py-3.5 text-sm font-bold text-[#06101d] transition hover:bg-blue-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.2)]"
          >
            Discuss Your Project →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;