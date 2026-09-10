function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05070b] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />

              <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let's talk about
              <br />
              <span className="text-blue-400">your project.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
              Tell us what you're looking to build. Share your idea,
              requirements or project details and we'll get back to you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">

              <a
                href="mailto:induslayer2@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400">
                  @
                </div>

                <div>
                  <div className="text-xs text-gray-600">EMAIL</div>
                  <div className="mt-1 text-sm font-medium text-gray-300 transition group-hover:text-white">
                    induslayer2@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+919355570559"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400">
                  ☎
                </div>

                <div>
                  <div className="text-xs text-gray-600">PHONE</div>
                  <div className="mt-1 text-sm font-medium text-gray-300 transition group-hover:text-white">
                    +91 93555 70559
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400">
                  ◎
                </div>

                <div>
                  <div className="text-xs text-gray-600">LOCATION</div>
                  <div className="mt-1 text-sm font-medium text-gray-300">
                    Rohtas, Bihar, India
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">

            <form className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-400">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-blue-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-400">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-blue-400/50"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-400">
                  PHONE
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-blue-400/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-400">
                  PROJECT DETAILS
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-blue-400/50"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-400 py-4 text-sm font-bold text-[#06101d] transition hover:bg-blue-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
              >
                Send Project Enquiry →
              </button>

              <p className="text-center text-xs text-gray-600">
                We'll get back to you as soon as possible.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;