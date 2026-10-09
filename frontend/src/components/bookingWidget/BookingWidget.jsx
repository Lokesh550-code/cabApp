const BookingWidget = () => {
  return (
    <section className="w-full px-5 py-8 sm:px-8 md:py-10 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-text-muted sm:text-sm">
            PLAN YOUR RIDE
          </p>

          <h2 className="mt-2 text-xl font-semibold text-text sm:text-2xl">
            Where are you going?
          </h2>

          <p className="mt-2 text-sm text-text-muted">
            Enter your pickup and destination to get started.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4 sm:p-6 md:p-8">
          <form
            className="flex flex-col gap-4 md:flex-row md:items-end md:gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="min-w-0 flex-1">
              <label
                htmlFor="pickup"
                className="mb-2 block text-sm font-semibold text-text"
              >
                Pickup location
              </label>

              <input
                id="pickup"
                name="pickup"
                type="text"
                autoComplete="street-address"
                placeholder="Enter pickup location"
                required
                className="h-12 w-full rounded-md border border-border bg-white px-3 text-sm text-text placeholder:text-text-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
              />
            </div>

            <div className="min-w-0 flex-1">
              <label
                htmlFor="destination"
                className="mb-2 block text-sm font-semibold text-text"
              >
                Destination
              </label>

              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="Where are you going?"
                required
                className="h-12 w-full rounded-md border border-border bg-white px-3 text-sm text-text placeholder:text-text-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10"
              />
            </div>

            <button
              type="submit"
              className="flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-bold text-navy transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy md:w-auto hover:cursor-pointer active:bg-text active:text-brand "
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
