import FleetCard from "./FleetCard";

const FleetWidget = () => {
  const fleet = [
    {
      id: "sedan",
      name: "Sedan",
      category: "Sedan",
      image: "/images/fleet/sedan.webp",
      passengers: 4,
      luggage: 2,
      transmission: "Manual",
      bestFor: "City rides and everyday travel",
      description:
        "A comfortable choice for small families and everyday journeys.",
      features: ["Air Conditioning", "Comfortable Seating"],
      cta: "Book This Vehicle",
    },
    {
      id: "ertiga",
      name: "Maruti Suzuki Ertiga",
      category: "MPV",
      image: "/images/fleet/ertiga.webp",
      passengers: 6,
      luggage: 3,
      transmission: "Manual",
      bestFor: "Family trips and group travel",
      description:
        "Extra space for families and small groups travelling together.",
      features: ["Air Conditioning", "Extra Passenger Space"],
      cta: "Book This Vehicle",
    },
    {
      id: "innova-crysta",
      name: "Toyota Innova Crysta",
      category: "Premium MPV",
      image: "/images/fleet/innova-crysta.webp",
      passengers: 7,
      luggage: 4,
      transmission: "Manual",
      bestFor: "Long-distance and premium travel",
      description: "A spacious option for longer journeys and family trips.",
      features: ["Air Conditioning", "Spacious Cabin"],
      cta: "Book This Vehicle",
    },
    {
      id: "tempo-traveller",
      name: "Tempo Traveller",
      category: "Group Travel",
      image: "/images/fleet/tempo-traveller.webp",
      passengers: 12,
      luggage: null,
      transmission: null,
      bestFor: "Large groups and family outings",
      description:
        "Group transportation for trips, tours, and special occasions.",
      features: ["Group Seating", "Long-Distance Travel"],
      cta: "Book This Vehicle",
    },
  ];

  return (
    <div className="w-full px-5 py-8 sm:py-8 md:px-16 lg:px-14">
      <h1 className="text-xl md:text-3xl md:mb-3 font-semibold">
        Choose the Right Vehicle
      </h1>
      <p className="text-text-muted text-sm md:text-md leading-3.5 font-medium">
        Well-maintained vehicles for a safe and comfortable journey.
      </p>

      <div className="w-full flex flex-wrap justify-center lg:justify-between gap-4 py-4">
        {fleet.map((elem) => {
          return <FleetCard elem={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
};

export default FleetWidget;
