import CommitmentCard from "./commitmentCard";

const commitments = [
  {
    id: 1,
    title: "Honest Communication",
    description:
      "Clear communication about your journey, vehicle requirements, and travel arrangements.",
  },
  {
    id: 2,
    title: "Comfort Along the Way",
    description:
      "Helping you find a suitable ride for your needs, whether it's a short trip or a longer journey.",
  },
  {
    id: 3,
    title: "A Dependable Experience",
    description:
      "Making every effort to keep your travel arrangements straightforward and your journey hassle-free.",
  },
];

const OurCommitment = () => {
  return (
    <section className="w-full bg-navy px-6 py-12 md:px-12 md:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">
        {/* Commitment statement */}
        <div>
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Our Commitment
          </span>

          <h2 className="font-display text-3xl leading-tight text-surface sm:text-4xl lg:text-5xl">
            More Than Just <span className="text-brand">A Ride.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
            Every journey comes with its own needs. Our commitment is to listen,
            communicate clearly, and help make your travel arrangements as
            comfortable and straightforward as possible.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
            Whether you're travelling across the city or planning a longer trip
            through Chhattisgarh, we want you to feel confident about the
            arrangements you've made.
          </p>
        </div>

        {/* Commitment principles */}
        <div className="flex flex-col divide-y divide-slate-700">
          {commitments.map((commitment) => (
            <CommitmentCard
              key={commitment.id}
              elem={commitment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
