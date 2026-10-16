
const Hero = () => {
  return (
    <section className="w-full px-6 py-8 md:px-12 md:py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        {/* Hero content */}
        <div className="flex flex-col items-start justify-center">
          <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            Safe · Comfortable · Affordable
          </span>

          <h1 className="font-display text-3xl leading-tight text-text sm:text-4xl lg:text-5xl">
            YOUR RIDE.
            <span className="block text-brand">
              OUR RESPONSIBILITY.
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-text-muted md:text-base md:leading-7">
            Reliable taxi service across Chhattisgarh.
            Travel comfortably, wherever the road takes you.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href=""
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-brand px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-brand-hover active:bg-navy-dark active:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Book a Ride
              <span aria-hidden="true" className="ml-2">→</span>
            </a>

            <a
              href="tel:+919XXXXXXXXX"
              className="inline-flex min-h-11 items-center rounded-[10px] px-1 py-2 text-sm font-semibold text-text transition-colors hover:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:text-base"
            >
              Call Us: +91 9XXXXXXX4
            </a>
          </div>
        </div>

        {/* Replace with the real hero photograph later */}
        <div
          role="img"
          aria-label="Placeholder for a CGCabwala taxi on the road"
          className="aspect-4/3 w-full rounded-2xl bg-sky-200 md:aspect-5/4 lg:aspect-4/3"
        />
      </div>
    </section>
  );
};

export default Hero;
