const Hero = () => {
  return (
    <div className="h-96 w-full md:flex">
      <div className="h-1/2 w-full px-12 py-6 flex flex-col justify-center items-start lg:h-full lg:w-1/2">
        <h1 className="select-none text-lg lg:text-4xl font-display text-text">
          YOUR RIDE.
        </h1>
        <h2 className="select-none text-xl lg:text-5xl font-display text-brand">
          OUR RESPONSIBILITY.
        </h2>
        <p className="text-xs md:text-sm mt-3 font-semibold">
          Reliable taxi service, across Chhattishgarh.
        </p>

        <div className="mt-3 flex gap-4">
          <button className="text-xs lg:text-md border px-1 py-1 text-text bg-surface hover:text-surface hover:bg-text active:text-brand active:bg-black active:border-surface rounded font-semibold hover:cursor-pointer transition">
            Book a Ride
          </button>
          <button className=" hover:text-surface hover:bg-text active:text-brand active:bg-black active:border-surface rounded font-semibold hover:cursor-pointer transition"></button>
          <p className="text-xs lg:text-md px-1 py-1 font-semibold text-text  bg-surface">
            Call Us: +91 9XXXXXXX4
          </p>
        </div>
      </div>
      <div className="h-1/2 w-full px-12 py-6 lg:h-full lg:w-1/2">
        <div className="h-full w-full bg-sky-200"></div>
      </div>
    </div>
  );
};

export default Hero;
