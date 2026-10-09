import { ShieldCheck, CarFront, MapPin, Phone } from "lucide-react";

const TrustCard = ({ elem }) => {
  return (
    <div className="min-h-32 min-w-36 px-5 max-w-42 flex flex-col items-center  bg-surface">
      <div className="m-3 p-2 bg-brand rounded-full">
        {elem.icon === "shield-check" ? (
          <ShieldCheck color="#102235" size={32} />
        ) : elem.icon === "car-front" ? (
          <CarFront color="#102235" size={32} />
        ) : elem.icon === "map-pin" ? (
          <MapPin color="#102235" size={32} />
        ) : (
          <Phone color="#102235" size={32} />
        )}
      </div>
      <p className="text-sm md:text-md mb-1 font-semibold">
        {elem.title}
      </p>
      <p className="text-sm leading-[0.9] text-text-muted text-center font-[550] mb-2 hidden lg:block">
        {elem.description}
      </p>
    </div>
  );
};

export default TrustCard;
