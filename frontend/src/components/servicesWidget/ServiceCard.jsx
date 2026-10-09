const ServiceCard = ({ elem }) => {
  return (
    <div className="w-full h-32 md:h-60 md:w-80 px-1 py-1 flex md:flex-col gap-2 border-text-muted shadow-sm rounded-[10px] ">
      <div className="h-full w-[43%] md:w-full md:h-2/3 rounded-md bg-sky-400"></div>
      <div className="h-full flex-1">
        <h1 className="text-sm font-semibold">{elem.title}</h1>
        <p className="text-xs font-medium">{elem.description}</p>
        <button className="mt-3 text-sm md:text-md px-2 py-1 lg:mb-2 text-text bg-brand hover:bg-brand-hover active:text-brand active:bg-black rounded font-semibold hover:cursor-pointer transition">
          Book a Ride
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
