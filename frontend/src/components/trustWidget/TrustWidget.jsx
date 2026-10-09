import TrustCard from "./TrustCard";

const TrustWidget = () => {
  const trustItems = [
    {
      id: 1,
      title: "Reliable Service",
      description: "Dependable ride arrangements for your travel needs.",
      icon: "shield-check",
    },
    {
      id: 2,
      title: "Comfortable Rides",
      description: "Comfortable vehicles for a smooth journey.",
      icon: "car-front",
    },
    {
      id: 3,
      title: "Local Expertise",
      description:
        "Travel across Chhattisgarh with local destination knowledge.",
      icon: "map-pin",
    },
    {
      id: 4,
      title: "Direct Assistance",
      description: "Get in touch with our team to arrange your ride.",
      icon: "phone",
    },
  ];

  return (
    <div className="w-full flex flex-wrap lg:flex-row overflow-hidden justify-center md:justify-between gap-3 px-6 lg:px-20 py-2">
        {trustItems.map(elem => {
            return <TrustCard elem={elem} key={elem.id} />
        })}
    </div>
  );
};

export default TrustWidget;
