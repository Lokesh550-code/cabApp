import { Luggage, User } from "lucide-react";

const FleetCard = ({ elem }) => {
  return (
    <div className="w-full h-32 md:h-60 md:w-80 px-1 py-1 flex md:flex-col gap-2 border-text-muted shadow-sm rounded-[10px] ">
      <div className="h-full w-[43%] md:w-full md:h-2/3 rounded-md bg-sky-400"></div>
      <div className="h-full flex-1 flex flex-col justify-between px-2">
        <h1 className="text-sm font-semibold">{elem.name}</h1>
        <p className="text-xs font-medium">{elem.description}</p>
        <p className="text-xs font-medium mt-2">{elem.features[0]}</p>
        <div className="flex gap-3 mt-1">
            <p className="text-text flex gap-2">
                <User size={17}/> {elem.passengers}
            </p>
            <p className="text-text flex gap-2">
                <Luggage size={17}/> {elem.luggage || 9}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
