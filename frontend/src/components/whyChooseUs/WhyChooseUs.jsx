import ReasonCard from "./WhyChooseUs.jsx";

const reasons = [
  {
    id: 1,
    number: "01",
    title: "Reliable Service",
    description:
      "Dependable ride arrangements for your local and outstation travel needs.",
  },
  {
    id: 2,
    number: "02",
    title: "Comfortable Rides",
    description:
      "Choose a vehicle that suits your journey, whether you're travelling alone or with a group.",
  },
  {
    id: 3,
    number: "03",
    title: "Local Expertise",
    description:
      "Travel across Chhattisgarh with help arranging journeys to the destinations you need.",
  },
  {
    id: 4,
    number: "04",
    title: "Direct Assistance",
    description:
      "Get in touch with our team to discuss your travel requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            Why CGCabwala
          </span>

          <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl lg:text-5xl">
            Every Journey Starts With <span className="text-brand">Trust.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-text-muted md:text-base md:leading-7">
            We want arranging your next ride to feel simple, clear, and
            comfortable from the very beginning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <ReasonCard key={reason.id} elem={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
