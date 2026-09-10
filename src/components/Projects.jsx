const projects = [
  {
    number: "01",
    title: "Engineering Components",
    category: "Precision Parts",
    size: "large",
  },
  {
    number: "02",
    title: "Custom Prototypes",
    category: "3D Printing",
    size: "small",
  },
  {
    number: "03",
    title: "Mould & Casting Solutions",
    category: "Engineering",
    size: "small",
  },
  {
    number: "04",
    title: "Decorative Products",
    category: "Custom Design",
    size: "large",
  },
];

function ProjectVisual({ project }) {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden bg-gradient-to-br from-[#111a29] via-[#0a101a] to-[#05070b]">
      
      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[70px]" />

      {/* Abstract 3D object */}
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-300/20 to-transparent shadow-[0_0_60px_rgba(59,130,246,0.15)] transition duration-700 group-hover:rotate-6 group-hover:scale-110">
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blue-300/20">
          <div className="h-full w-full rounded-full border border-dashed border-blue-300/40" />
        </div>

        <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/10" />

        <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/10" />
      </div>

      {/* Technical labels */}
      <div className="absolute left-6 top-6 text-[9px] font-bold tracking-[0.25em] text-blue-300/60">
        INDUSLAYER / {project.number}
      </div>

      <div className="absolute bottom-6 right-6 text-[9px] tracking-[0.2em] text-gray-600">
        PRECISION / ENGINEERED
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070a10] py-28 sm:py-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
                SELECTED WORK
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas we've
              <span className="text-blue-400"> built.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            A glimpse of the kind of engineering, prototyping and custom
            manufacturing solutions we can create.
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.number}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] ${
                project.size === "large"
                  ? "min-h-[500px]"
                  : "min-h-[360px]"
              }`}
            >
              <ProjectVisual project={project} />

              {/* Overlay content */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/80 to-transparent px-7 pb-7 pt-20">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <div className="mb-2 text-[10px] font-bold tracking-[0.25em] text-blue-400">
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-400 group-hover:text-[#06101d]">
                    ↗
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Portfolio note */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-gray-600">
            More projects coming soon.
          </p>

          <a
            href="#contact"
            className="text-xs font-bold tracking-wider text-blue-400 transition hover:text-blue-300"
          >
            WORK WITH US →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;