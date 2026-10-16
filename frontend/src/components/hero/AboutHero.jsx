const AboutHero = () => {
  return (
    <section className="w-full px-6 py-8 md:px-12 md:py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">

        <div className="flex flex-col items-start justify-center">
          <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            About Us
          </span>

          <h1 className="select-none font-display text-3xl leading-tight text-text md:text-4xl lg:text-5xl">
            More Than Just a Ride,
            <span className="block text-brand">
              A Safer Journey Together.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted md:text-base md:leading-7">
            CGCabwala is here to make travelling across Chhattisgarh
            comfortable and convenient, with dependable taxi services
            for individuals, families, and businesses.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              className="rounded-[10px] bg-brand px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-brand-hover active:bg-navy-dark active:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Book a Ride
            </button>

            <a
              href="tel:+919XXXXXXXXX"
              className="rounded-sm px-1 py-2 text-sm font-semibold text-text transition-colors hover:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:text-base"
            >
              Call Us: +91 9XXXXXXX4
            </a>
          </div>
        </div>

        <div
          role="img"
          aria-label="Placeholder for a CGCabwala taxi photograph"
          className="h-56 w-full rounded-2xl bg-sky-200 md:h-72 lg:h-96"
        />
      </div>
    </section>
  );
};

export default AboutHero;