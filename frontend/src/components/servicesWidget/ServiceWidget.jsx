import ServiceCard from "./ServiceCard";

const ServiceWidget = () => {
  const services = [
    {
      id: "local-taxi",
      title: "Local Taxi",
      description: "Quick, convenient rides around the city.",
      icon: "map-pinned",
      image: "/images/services/local-taxi.webp",
      cta: "Book a Ride",
    },
    {
      id: "outstation-taxi",
      title: "Outstation Taxi",
      description: "Comfortable rides for longer journeys.",
      icon: "route",
      image: "/images/services/outstation-taxi.webp",
      cta: "Book a Ride",
    },
    {
      id: "airport-transfer",
      title: "Airport Transfer",
      description: "Convenient airport pickups and drop-offs.",
      icon: "plane",
      image: "/images/services/airport-transfer.webp",
      cta: "Book a Ride",
    },
    {
      id: "tempo-traveller",
      title: "Tempo Traveller",
      description: "Spacious group travel for families and friends.",
      icon: "users",
      image: "/images/services/tempo-traveller.webp",
      cta: "Book a Ride",
    },
  ];

  return (
    <div className="w-full px-5 py-8 sm:py-8 md:px-16 lg:px-14">
      <h1 className="text-xl md:text-3xl md:mb-3 font-semibold">
        Taxi Services We Offer
      </h1>
      <p className="text-text-muted text-sm md:text-md leading-3.5 font-medium">
        From local rides to outstation trips, CGCabwala provides reliable and
        comfortable taxi servies for all your travel needs in Chhattishgarh and
        beyond.
      </p>
      <div className="w-full flex flex-wrap justify-center gap-4 py-4">
        {services.map(elem => {
          return <ServiceCard elem={elem} key={elem.id}/>
        })}
      </div>
    </div>
  );
};

export default ServiceWidget;
