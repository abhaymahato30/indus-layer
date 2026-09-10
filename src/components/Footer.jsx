function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030509]">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="text-xl font-extrabold tracking-[0.2em] text-white"
            >
              INDUS<span className="text-blue-400">LAYER</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
              Engineering ideas for a better tomorrow. We transform
              concepts into precision-engineered products, prototypes
              and custom solutions.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white">
              NAVIGATION
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a href="#home" className="text-sm text-gray-500 hover:text-white">
                Home
              </a>

              <a href="#services" className="text-sm text-gray-500 hover:text-white">
                Services
              </a>

              <a href="#process" className="text-sm text-gray-500 hover:text-white">
                Process
              </a>

              <a href="#projects" className="text-sm text-gray-500 hover:text-white">
                Projects
              </a>

              <a href="#contact" className="text-sm text-gray-500 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white">
              CONTACT
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:induslayer2@gmail.com"
                className="block text-sm text-gray-500 hover:text-white"
              >
                induslayer2@gmail.com
              </a>

              <a
                href="tel:+919355570559"
                className="block text-sm text-gray-500 hover:text-white"
              >
                +91 93555 70559
              </a>

              <p className="text-sm leading-6 text-gray-500">
                Rohtas, Bihar
                <br />
                India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} INDUSLAYER. All rights reserved.
          </p>

          <p className="text-xs text-gray-700">
            Engineering Ideas for a Better Tomorrow.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;