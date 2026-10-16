const OurStoryWidget = () => {
  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Image placeholder */}
        <div
          role="img"
          aria-label="Placeholder for a CGCabwala vehicle and driver photograph"
          className="aspect-4/3 w-full rounded-2xl bg-sky-200"
        />

        {/* Story content */}
        <div className="flex flex-col items-start">
          <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            Our Story
          </span>

          <h2 className="font-display text-2xl leading-tight text-text sm:text-3xl lg:text-4xl">
            Built for the People of{" "}
            <span className="text-brand">Chhattisgarh.</span>
          </h2>

          <p className="mt-5 text-sm leading-6 text-text-muted md:text-base md:leading-7">
            At CGCabwala, our goal is to make getting from one place
            to another simpler and more comfortable. Whether it is a
            local trip, an outstation journey, or an airport transfer,
            we help you arrange a ride that suits your needs.
          </p>

          <p className="mt-4 text-sm leading-6 text-text-muted md:text-base md:leading-7">
            We believe a good taxi service comes down to dependable
            arrangements, comfortable vehicles, and support when you
            need it. We aim to make every journey feel straightforward
            from booking to arrival.
          </p>

          <a
            href=""
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-text hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Explore Our Services
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStoryWidget;
